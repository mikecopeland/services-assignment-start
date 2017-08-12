import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  private users: string[];
  numUsersInactivated: CounterService;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.numUsersInactivated = this.usersService.usersInactivatedCounter;
  }

  onSetToActive(i: number) {
    this.usersService.activateUser(i);
  }
}
