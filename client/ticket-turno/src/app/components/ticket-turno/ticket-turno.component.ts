import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket-turno',
  templateUrl: './ticket-turno.component.html',
  styleUrls: ['./ticket-turno.component.css'],
})
export class TicketTurnoComponent implements OnInit {
  ticketTurnoForm = new FormGroup({
    completeName: new FormControl(''),
    curp: new FormControl(''),
    name: new FormControl(''),
    paternal: new FormControl(''),
    maternal: new FormControl(''),
    phone: new FormControl(''),
    cel: new FormControl(''),
    email: new FormControl(''),
    level: new FormControl(''),
    municipality: new FormControl(''),
    subject: new FormControl(''),
    age: new FormControl(''),
    _id: new FormControl(''),
    __v: new FormControl(''),
  });

  ticket: any = {
    completeName: '',
    curp: '',
    name: '',
    paternal: '',
    maternal: '',
    phone: '',
    cel: '',
    email: '',
    level: '',
    municipality: '',
    subject: '',
    age: '',
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.ticketService.saveTicket(this.ticketTurnoForm.value).subscribe({
      error: (err) => {
        console.error(err);
      },
      next: (value) => {},
    });
  }

  onSearch() {
    this.ticketService.getTicket(this.ticketTurnoForm.value.curp).subscribe({
      error(err) {
        console.log(err);
      },
      next: (v) => {
        this.ticket = v;
        this.ticketTurnoForm.setValue(this.ticket);
      },
    });
  }

  onUpdate() {
    this.ticket = this.ticketTurnoForm.value;
    this.ticketService.updateTicket(this.ticket).subscribe({
      error(err) {
        console.log(err);
      },
      next: (v) => {},
    });
  }

  signOut() {
    this.authService.logout().subscribe({
      error(err) {
        console.error(err);
      },
      complete: () => {
        this.storageService.clean();
        this.router.navigateByUrl('login');
      },
    });
  }
}
