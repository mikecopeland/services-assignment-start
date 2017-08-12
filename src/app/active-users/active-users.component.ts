import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
})
export class ActiveUsersComponent implements OnInit {
  @Input() private users: string[];
  numUsersActivated: CounterService;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.numUsersActivated = this.usersService.usersActivatedCounter;
  }

  onSetToInactive(i: number) {
    this.usersService.inactivateUser(i);
  }
}
