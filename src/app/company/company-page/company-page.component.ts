import { Component, OnInit } from '@angular/core';

// we ran ng generate component  company-page --skip-import so that we didnt auto import into the module.
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
