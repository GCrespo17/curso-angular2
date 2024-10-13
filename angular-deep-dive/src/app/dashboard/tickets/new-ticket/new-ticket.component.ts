import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
  //Me ayuda a encontrar elementos hijos en la vista de l componente
  //Esto es para usar el elemto template de forma global, con ngOnInit estaria indefinido la forma
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; 
  ////////////////////////////////////////
  //La forma de usarlo como signal es la siguiente
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle="";
  enteredText="";
  //Usaremos signals en vez de @Output decorador
  add = output<{title: string; text: string}>();

  ngAfterViewInit(): void {
    //El objetivo es garantizar que tendre acceso al elemento que seleccione con viewChild
    console.log("AFTER VIEW INIT");
    console.log(this.form().nativeElement)
  }

  // //Esto es una alternativa a two way binding, templates
  // onSubmit(title: string, ticketText: string){
  //   this.add.emit({title: title, text: ticketText});
  //   // this.form?.nativeElement.reset();
  //   /////////////////
  //   //Como signal:
  //   this.form().nativeElement.reset();
  // }

  onSubmit(){
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    this.enteredText="";
    this.enteredTitle="";
  }
}
