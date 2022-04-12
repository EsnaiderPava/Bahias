import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from 'src/environments/environment';

const API_BASE = URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${API_BASE}/rutas`);
  }

  create(ruta: any) {
    return this.http.post(`${API_BASE}/rutas`, ruta);
  }

  update(id: string, ruta: any) {
    return this.http.put(`${API_BASE}/rutas/${id}`, ruta);
  }
  
  delete(id: string) {
    return this.http.delete(`${API_BASE}/rutas/${id}`);
  }

}
