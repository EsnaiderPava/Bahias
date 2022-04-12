import { Component, OnInit } from '@angular/core';
import { BicicletaService } from 'src/app/services/bicicleta.service';

@Component({
  selector: 'app-bicicletasc',
  templateUrl: './bicicletasc.component.html',
  styleUrls: ['./bicicletasc.component.css']
})
export class BicicletascComponent implements OnInit {

  bicicletas: any[] = [];
  bicicleta = {
    id: null,
    marca: '',
    tipo: '',
    color: '',
    estado: false
  }

  constructor(
    private  bicicletaService : BicicletaService 
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bicicletaService.getAll()
    .subscribe((data: any) => this.bicicletas = data)
  }

  save() {
    if (this.bicicleta.id) {
      this.bicicletaService.update(this.bicicleta.id!, this.bicicleta)
      .subscribe(() => this.getAll());
    }else{
      this.bicicletaService.create(this.bicicleta)
      .subscribe(() => this.getAll());
    }

    this.bicicleta = {
      id: null,
      marca: '',
      tipo: '',
      color: '',
      estado: false
    }
  }

  edit(bicicleta: any) {
    this.bicicleta = {
      ...bicicleta
    };
  }

  delete(bicicleta: any) {
    this.bicicletaService.delete(bicicleta.id)
    .subscribe(() => this.getAll())
  }

}
