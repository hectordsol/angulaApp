import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  @Input() name: string = 'Cualquiera';

ngOnInit():void{
  console.log("ngOnInit en Saludo")
}
alertSaludo():void{
  alert(`Hola ${this.name}. Alerta desde click en botón`)
}
}
