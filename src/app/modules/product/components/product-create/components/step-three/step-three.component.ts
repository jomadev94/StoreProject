import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryTag } from '@models/queryTag';
import { Tag } from '@models/tag';
import { TagService } from '@services/tag/tag.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Globals } from '@static/globals';
import { v4 as uuid } from 'uuid';
import { DeleteTagComponent } from './delete-tag/delete-tag.component';
import { DATA_ANY, DATA_TAG } from '@static/data';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
})
export class StepThreeComponent {
  @ViewChild('tagsBox') tagsBox: ElementRef;
  @Input() toAdd: Tag[] = [];
  roles = Globals.roles;
  msg: string[] = [];
  errMsg: boolean = true;
  loadSearch: boolean;
  loadCreate: boolean;
  searchForm: FormGroup;
  addForm: FormGroup;
  tagSelected: Tag | undefined;
  tags: Tag[] = [];
  page: number = 1;
  hasNext: boolean = false;
  deleteTag = DeleteTagComponent;
  providers: any[];

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private tagService: TagService,
  ) {
    this.searchForm = this.formBuilder.group({
      tag: [''],
    });
    this.addForm = this.formBuilder.group({
      tag: ['', [Validators.required,Validators.maxLength(20)]],
    });
    this.addForm.valueChanges.subscribe(() => (this.msg = []));
    this.searchForm.valueChanges.subscribe((res) => {
      this.page = 1;
      this.loadTags();
    });
    this.loadCreate = false;
    this.firstLoad();
    this.tagService.deleted$.subscribe((res) => {
      if (res) {
        this.tagSelected = undefined;
      }
    });
  }

  async loadTags() {
    this.loadSearch=true
    const tagName = this.searchForm.get('tag')?.value;
    const query =
      tagName != ''
        ? new QueryTag(this.page, 20, tagName)
        : new QueryTag(this.page, 20);
    const res = await lastValueFrom(this.tagService.getAll(query));
    if (res.success) {
      this.loadSearch=false;
      let items = res.data.items as Tag[];
      items = items.filter(
        (t) => this.toAdd.findIndex((s) => s.tagId === t.tagId) < 0
      );
      this.tags=items;
      this.hasNext = res.data.hasNextPage;
    }
  }

  async firstLoad() {
    this.loadSearch=true;
    const res = await firstValueFrom(
      this.tagService.getAll(new QueryTag(this.page, 20))
    );
    if (res.success) {
      this.loadSearch=false;
      let items = res.data.items as Tag[];
      items = items.filter(
        (t) => this.toAdd.findIndex((s) => s.tagId === t.tagId) < 0
      );
      this.tags.push(...items);
      this.hasNext = res.data.hasNextPage;
    }
  }

  selectTag(event: any) {
    if (this.tagSelected) {
      const indexSelect = this.tags.indexOf(this.tagSelected);
      const elem = this.tagsBox.nativeElement as HTMLElement;
      this.renderer.removeClass(
        elem.childNodes[indexSelect],
        'result-box__item--selected'
      );
    }
    this.renderer.addClass(event.target, 'result-box__item--selected');
    this.tagSelected = this.tags.find((t) => t.tagId === event.target.id);
    this.changeProviders();
  }

  changeProviders() {
    this.providers = [
      { provide: DATA_TAG, useValue: this.tagSelected },
      { provide: DATA_ANY, useValue: this.tags },
    ];
  }

  onScrollDown() {
    if (this.hasNext) {
      this.page++;
      this.loadTags();
    }
  }

  resetMessages(){
    setTimeout(()=>{
      this.msg=[];
    },6000)
  }

  createTag() {
    if (this.addForm.valid) {
      this.loadCreate=true;
      this.msg=[];
      const tag: Tag = {
        tagId: uuid(),
        name: this.addForm.get('tag')?.value,
      };
      this.tagService.create(tag).subscribe((res) => {
        if (res.success) {
          this.loadCreate=false;
          this.tags.push(tag);
          this.errMsg = false;
          this.msg = ['El Tag fue creado exitosamente'];
        }
        else{
          this.loadCreate=false;
          this.msg = res.errorMessage;
          this.errMsg = true;
        }
        this.resetMessages();
      });
    }
  }

  addTag() {
    if (!this.tagSelected) {
      return;
    }
    if (this.toAdd.indexOf(this.tagSelected) > 0) {
      return;
    }
    const index = this.tags.indexOf(this.tagSelected);
    this.tags.splice(index, 1);
    this.toAdd.push(this.tagSelected);
    this.tagSelected = undefined;
  }

  cancelTag(event: any) {
    const tag = this.toAdd.find((t) => t.tagId === event.target.id);
    const index = this.toAdd.indexOf(tag!);
    this.toAdd.splice(index, 1);
    this.tags.push(tag!);
  }
}
