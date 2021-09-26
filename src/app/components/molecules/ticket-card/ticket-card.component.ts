import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/types/board';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

  @Input() ticket!: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

  updateTicketTitle(value: string): void{
    this.ticket.title = value
  }

}
