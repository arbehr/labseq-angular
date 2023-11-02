import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export const endpoint = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LabseqService {

  constructor(private http: HttpClient) {
  }

  getSequenceResult(n: number): Observable<any> {
    return this.http.get<any>(endpoint + '/labseq/' + n);
  }
}
