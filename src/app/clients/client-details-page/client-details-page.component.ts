import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.scss'],
})
export class ClientDetailsPageComponent implements OnInit {
  // current client
  selectedClient: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * on init set client id = to id from url
   * set selected client = result of getClientById service
   */
  ngOnInit(): void {
    const clientID = this.route.snapshot.paramMap.get('id');
    this.clientService.getClientByID(clientID).subscribe((res) => {
      this.selectedClient = res;
    });
  }

  searchEventHandler(): void {
    this.backToSearchPage();
  }

  // pass the client and id into url to edit
  editEventHandler(client: Client): void {
    this.router.navigateByUrl('/clients/edit/' + client.id);
  }

  // use the delete client service and after we get the result go back to the search page
  deleteClientHandler(client: Client): void {
    this.clientService.deleteClient(client.id).subscribe(() => {
      this.backToSearchPage();
    });
  }

  // same as delete execpt using update client method
  saveClientHandler(client: Client): void {
    this.clientService.updateClient(client).subscribe(() => {
      this.backToSearchPage();
    });
  }

  // redirect back to search page
  private backToSearchPage(): void {
    this.router.navigateByUrl('/clients/search');
  }
}
