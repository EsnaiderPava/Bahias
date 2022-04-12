import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from 'src/environments/environment';

const API_BASE = URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class BicicletaService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${API_BASE}/bicicletas`);
  }

  create(bicicleta: any) {
    return this.http.post(`${API_BASE}/bicicletas`, bicicleta);
  }

  update(id: string, bicicleta: any) {
    return this.http.put(`${API_BASE}/bicicletas/${id}`, bicicleta);
  }
  
  delete(id: string) {
    return this.http.delete(`${API_BASE}/bicicletas/${id}`);
  }

}
