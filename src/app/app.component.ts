import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string [];

  constructor(private usersService: UsersService, private counterService: CounterService) {

  }

  ngOnInit() {
    this.usersService.setActiveUsers(['Max', 'Anna']);
    this.usersService.setInactiveUsers(['Chris', 'Manu']);
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.activeUsers = this.usersService.activeUsers;
  }
}
