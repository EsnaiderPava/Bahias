import { Component, OnInit } from '@angular/core';
import { CompetenciaService } from 'src/app/services/competencia.service';

@Component({
  selector: 'app-competenciasc',
  templateUrl: './competenciasc.component.html',
  styleUrls: ['./competenciasc.component.css']
})
export class CompetenciascComponent implements OnInit {

  competencias: any[] = [];
  competencia = {
    id: null,
    nombre: '',
    fecha: '',
    lugar: '',
    descripcion: ''
  }

  constructor(
    private  competenciaService : CompetenciaService 
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.competenciaService.getAll()
    .subscribe((data: any) => this.competencias = data)
  }

  save() {
    if (this.competencia.id) {
      this.competenciaService.update(this.competencia.id!, this.competencia)
      .subscribe(() => this.getAll());
    }else{
      this.competenciaService.create(this.competencia)
      .subscribe(() => this.getAll());
    }

    this.competencia = {
      id: null,
      nombre: '',
      fecha: '',
      lugar: '',
      descripcion: ''
    }
  }

  edit(competencia: any) {
    this.competencia = {
      ...competencia
    };
  }

  delete(competencia: any) {
    this.competenciaService.delete(competencia.id)
    .subscribe(() => this.getAll())
  }

}
