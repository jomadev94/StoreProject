import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnInit} from '@angular/core';
import { Tag } from '@models/tag';
import { LoadService } from '@services/load/load.service';
import { TagService } from '@services/tag/tag.service';
import { DATA_ANY, DATA_OVREF, DATA_TAG } from '@static/data';
import gsap from 'gsap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-tag',
  templateUrl: './delete-tag.component.html',
  styleUrls: ['./delete-tag.component.scss'],
})
export class DeleteTagComponent implements OnInit {
  title: string;
  selected: Tag;
  load: Observable<boolean>;
  errMsg: string[] = [];

  constructor(
    @Inject(DATA_TAG) public tagSelected: Tag | undefined,
    @Inject(DATA_ANY) public tags: Tag[],
    @Inject(DATA_OVREF) public overRef: OverlayRef,
    private tagService: TagService,
    private loadService: LoadService
  ) {
    this.title = 'Eliminar etiqueta';
    this.selected = this.tagSelected!;
    this.load = this.loadService.isLoading$;
  }

  ngOnInit(): void {}

  delete() {
    this.errMsg=[];
    this.tagService.delete(this.tagSelected!.tagId).subscribe((res) => {
      if (res.success) {
        const index = this.tags.indexOf(this.tagSelected!);
        this.tags.splice(index, 1);
        this.tagService.confirmDelete();
        this.cancel();
        return;
      }
      this.errMsg = res.errorMessage;
    });
  }

  cancel() {
    gsap
      .to('.modal-box', { duration: 0.2, opacity: 0, ease: 'power2' })
      .then(() => {
        this.overRef.detach();
      });
  }
}
