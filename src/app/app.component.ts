import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.usersService.setActiveUsers(['Max', 'Anna']);
    this.usersService.setInactiveUsers(['Chris', 'Manu']);
  }
}
