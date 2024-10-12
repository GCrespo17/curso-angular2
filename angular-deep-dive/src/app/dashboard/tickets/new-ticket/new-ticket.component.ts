import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  //Me ayuda a encontrar elementos hijos en la vista de l componente
  //Esto es para usar el elemto template de forma global
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; 
  ////////////////////////////////////////
  //La forma de usarlo como signal es la siguiente
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  //Esto es una alternativa a two way binding
  onSubmit(title: string, ticketText: string){
    console.log(title);
    console.log(ticketText);
    // this.form?.nativeElement.reset();
    /////////////////
    //Como signal:
    this.form.855555555555555558888888
  }
}
