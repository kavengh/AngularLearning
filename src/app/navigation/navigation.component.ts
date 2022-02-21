import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() title: string;

  // created a router object
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * if the location is matched in the router object if will redirect
   * @param location - path we want to redirect to
   */
  goto(location: string) {
    console.log(location);
    this.router.navigateByUrl(location);
  }
}
