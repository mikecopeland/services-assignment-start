import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
})
export class ActiveUsersComponent implements OnInit {
  private users: string[];
  numUsersActivated: CounterService;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
    this.numUsersActivated = this.usersService.usersActivatedCounter;
  }

  onSetToInactive(i: number) {
    this.usersService.inactivateUser(i);
  }
}
