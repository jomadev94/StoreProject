import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Roles } from '@enumerables/roles';
import { AuthService } from '@services/auth/auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit ,OnDestroy {

  private currentUserRole: Roles = Roles.NoAuth; 
  private blockRoles:Roles[];
  private subsAuth$:Subscription;

  @Input() set appRole(value:Roles[]){
    this.blockRoles=value;
    this.updateView();
  }

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef,
    private authService:AuthService,
  ) {
    this.currentUserRole=this.authService.currentUser.role;
    this.subsAuth$=this.authService.userAuth$.subscribe(
      isAuth=>{
        this.currentUserRole=this.authService.currentUser.role;
        this.updateView();         
      }
    )
  }
  
  ngOnInit(): void {
    this.updateView;
  }

  ngOnDestroy(): void {
    this.subsAuth$.unsubscribe();
  }
  
  private updateView(){
    this.viewContainer.clear();
    if(this.checkRoles()){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkRoles(){
    return this.blockRoles.includes(this.currentUserRole);
  }

}
