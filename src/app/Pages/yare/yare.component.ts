import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartasComponent } from '../cartas/cartas.component';
import { MensajeComponent } from "../mensaje/mensaje.component";

@Component({
  selector: 'app-yare',
  templateUrl: './yare.component.html',
  imports: [CommonModule, CartasComponent, MensajeComponent],
  styleUrls: ['./yare.component.css']
})
export class YareComponent {
  months: string[] = ['Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

  messages: { [key: string]: string } = {
    Diciembre: 'Como olvidar este mes... Fue cuando todo empezo aun recuerdo los dias que pase dandole vueltas al asunto aun asi... Solo queria estar a tu lado',
    Enero: 'Este mes fue toda una aventura, nuevas cosas a tu lado y cada vez que pasaba el tiempo me gustabas más.',
    Febrero: 'Nuestro primer San Valentín… y me acuerdo de tu sonrisa creo que nunca la olvidaré, me encanta verte sonreír.',
    Marzo: 'En este punto me di cuenta... ¿Como que le falta un tornillo?... Es broma pero entendi lo bien que ambos nos complementabamos,para ti una voz de la razon y para mi alguien que me haga ver que no todo es logico',
    Abril: 'Ese mes si que me tomaste por sorpresa creo que es algo que nunca podre olvidar. Por ello estoy muy agradecido para mi fue algo especial.',
    Mayo: 'Ah siempre he creido que el tiempo a tu lado pasa demasiado rapido y prueba fue este mes... Solo puedo recordar que con cada dia estoy mas segur de querer casarme contigo .',
    Junio: 'Y aqui estamos en este mes tan importante ¿Por que?, pues es facil... Es cuando el amor de mi vida ha nacido algo tarde por que yo ya caminaba hahaha pero fuera de ello... Feliz cumpleaños.'
  };

  selectedMonth: string = '';
  selectedMessage: string = '';
  isModalOpen: boolean = false;

  openMessage(month: string) {
    this.selectedMonth = month;
    this.selectedMessage = this.messages[month];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  

}
