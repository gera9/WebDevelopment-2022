import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTurnoComponent } from './ticket-turno.component';

describe('TicketTurnoComponent', () => {
  let component: TicketTurnoComponent;
  let fixture: ComponentFixture<TicketTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTurnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
