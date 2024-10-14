import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: "appAuth"});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  //A referencia de un lugar en el dom donde el template esta siendo usado
  private viewContainerRef= inject(ViewContainerRef);

  constructor() {
    //effect me permite correr codigo cuando un signal cambia
    effect(()=>{
      if(this.authService.activePermission()===this.userType()){
        //Crea el elemento en algun lugar del dom
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();
      }
    });
   }

}
