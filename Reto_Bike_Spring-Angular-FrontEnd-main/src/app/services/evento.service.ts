import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from 'src/environments/environment';

const API_BASE = URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${API_BASE}/eventos`);
  }

  create(evento: any) {
    return this.http.post(`${API_BASE}/eventos`, evento);
  }

  update(id: string, evento: any) {
    return this.http.put(`${API_BASE}/eventos/${id}`, evento);
  }
  
  delete(id: string) {
    return this.http.delete(`${API_BASE}/eventos/${id}`);
  }

}