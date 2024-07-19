import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Patient from '../types/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl='http://localhost:3000';
  httpClient=inject(HttpClient);

  constructor() { }

  getPatients(){
    return this.httpClient.get<Patient[]>(this.apiUrl + '/patients');
  }

  addPatient(model:Patient){
    return this.httpClient.post<Patient[]>(this.apiUrl + '/patients' , model);
  }

  deletePatient(id:string){
    return this.httpClient.delete(this.apiUrl + '/patients/' + id);
  }
}
