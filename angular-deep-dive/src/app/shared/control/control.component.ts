import { afterNextRender, afterRender, Component, contentChild, ElementRef, HostBinding, HostListener, inject, input, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
   class: 'control',
   "(click)": "onClick()"
  }
})
export class ControlComponent {
  // @HostBinding("class") className="control";
  // @HostListener("click") onClick(){
  //   console.log("Clicked!");
  // }
  label = input.required<string>();
  private el=inject(ElementRef);
  //Sesion 132 usar contentChild
  private control =contentChild<ElementRef<HTMLInputElement>>('input');
  
  // constructor(){
  //   //Sera llamado cada vez que cualquier cambio de la aplicacion ocurra en la pagina
  //   afterRender(()=>{
  //     console.log("afterRender");
  //   });
  //   //Sera invocado cada vez que suceda el siguiente cambio en la aplicacion
  //   afterNextRender(()=>{
  //     console.log("afterNextRender");
  //   });
  // }
  
  onClick(){
    console.log("Clicked!");
    console.log(this.el);  
    console.log(this.control());
  }
}
