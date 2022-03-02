import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-search-page',
  templateUrl: './client-search-page.component.html',
  styleUrls: ['./client-search-page.component.scss'],
})
export class ClientSearchPageComponent implements OnInit {
  clientList: any;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClientList();
  }

  searchEventHandler(searchTerm): void {
    if (searchTerm) {
      this.searchClients(searchTerm);
    } else {
      this.loadClientList();
    }
  }

  /*
   * clientService.getClients() returns an observable that we subscribe to
   * we then set clientList to the result of the call
   */
  private loadClientList(): void {
    this.clientService.getClients().subscribe((result) => {
      this.clientList = result;
    });
  }

  private searchClients(searchTerm): void {
    this.clientService.search(searchTerm).subscribe((res) => {
      this.clientList = res;
    });
  }
}
