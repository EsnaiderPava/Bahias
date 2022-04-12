import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from 'src/environments/environment';

const API_BASE = URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${API_BASE}/competencias`);
  }

  create(competencia: any) {
    return this.http.post(`${API_BASE}/competencias`, competencia);
  }

  update(id: string, competencia: any) {
    return this.http.put(`${API_BASE}/competencias/${id}`, competencia);
  }
  
  delete(id: string) {
    return this.http.delete(`${API_BASE}/competencias/${id}`);
  }

}
