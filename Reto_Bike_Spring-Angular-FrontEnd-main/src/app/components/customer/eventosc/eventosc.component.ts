import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventosc',
  templateUrl: './eventosc.component.html',
  styleUrls: ['./eventosc.component.css']
})
export class EventoscComponent implements OnInit {

  eventos: any[] = [];
  evento = {
    id: null,
    nombre: '',
    fecha: '',
    lugar: '',
    descripcion: ''
  }

  constructor(
    private  eventoService : EventoService 
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.eventoService.getAll()
    .subscribe((data: any) => this.eventos = data)
  }

  save() {
    if (this.evento.id) {
      this.eventoService.update(this.evento.id!, this.evento)
      .subscribe(() => this.getAll());
    }else{
      this.eventoService.create(this.evento)
      .subscribe(() => this.getAll());
    }

    this.evento = {
      id: null,
      nombre: '',
      fecha: '',
      lugar: '',
      descripcion: ''
    }
  }

  edit(evento: any) {
    this.evento = {
      ...evento
    };
  }

  delete(evento: any) {
    this.eventoService.delete(evento.id)
    .subscribe(() => this.getAll())
  }

}
