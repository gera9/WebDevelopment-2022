import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:3000/api/ticket/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  getTicket(curp: any) {
    return this.http.post(
      AUTH_API + 'search',
      {
        curp,
      },
      httpOptions
    );
  }

  updateTicket(ticket: any) {
    return this.http.post(AUTH_API + 'update', ticket, httpOptions);
  }

  saveTicket(ticket: any) {
    return this.http.post(AUTH_API + 'create', ticket, httpOptions);
  }
}
