import { Component, Input, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Section, Ticket } from 'src/app/types/board';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-section',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.scss']
})
export class BoardSectionComponent implements OnInit {

  @Input() section!: Section;
  public titleIsEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateSectionTitle(value: string): void {
    this.section.title = value;
  }

  addTicket(): void {
    const ticket: Ticket = {
      title: 'new ticket',
      assignedUserId: 0
    }

    this.section.tickets.push(ticket)
  }

}
