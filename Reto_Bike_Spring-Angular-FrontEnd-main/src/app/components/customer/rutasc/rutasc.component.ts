import { Component, OnInit } from '@angular/core';
import { RutaService } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-rutasc',
  templateUrl: './rutasc.component.html',
  styleUrls: ['./rutasc.component.css']
})
export class RutascComponent implements OnInit {

  rutas: any[] = [];
  ruta = {
    id: null,
    nombre: '',
    fecha: '',
    lugar: '',
    descripcion: ''
  }

  constructor(
    private  rutaService : RutaService 
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.rutaService.getAll()
    .subscribe((data: any) => this.rutas = data)
  }

  save() {
    if (this.ruta.id) {
      this.rutaService.update(this.ruta.id!, this.ruta)
      .subscribe(() => this.getAll());
    }else{
      this.rutaService.create(this.ruta)
      .subscribe(() => this.getAll());
    }

    this.ruta = {
      id: null,
      nombre: '',
      fecha: '',
      lugar: '',
      descripcion: ''
    }
  }

  edit(ruta: any) {
    this.ruta = {
      ...ruta
    };
  }

  delete(ruta: any) {
    this.rutaService.delete(ruta.id)
    .subscribe(() => this.getAll())
  }

}
