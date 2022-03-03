import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent {
  editView = false;

  @Input()
  client: Client;

  /**
   * instatiation of the events, we do this so we can pass data to the parent component, the data these events emit are type Client
   */
  @Output()
  searchEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  editEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  saveEvent: EventEmitter<Client> = new EventEmitter();

  /**
   * methods that will pass the data to the parent, these are used in our view template. The actual logic will be in the parent component and passed in as properites to this component. We have these h
   */

  searchAll(): void {
    this.searchEvent.emit();
  }

  edit(): void {
    this.toggleEdit();
  }

  delete(client: Client): void {
    this.deleteEvent.emit(client);
  }

  save(): void {
    this.saveEvent.emit(this.client);
    this.toggleEdit();
  }

  private toggleEdit(): void {
    this.editView = !this.editView;
  }
}
