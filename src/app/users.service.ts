import {CounterService} from "./counter.service";



export class UsersService {
  activeUsers: string[];
  inactiveUsers: string[];
  usersActivatedCounter = new CounterService();
  usersInactivatedCounter = new CounterService();

  constructor() {
    this.activeUsers = [];
    this.inactiveUsers = [];
  }

 getActiveUsers() {
    return this.activeUsers;
  }

  getInactiveUsers() {
    return this.inactiveUsers;
}

  setActiveUsers(users: string[]){
    this.activeUsers = users;
  }

  setInactiveUsers(users: string[]){
    this.inactiveUsers = users;
  }

  activateUser(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usersActivatedCounter.incrementCounter();
  }

  inactivateUser(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.usersInactivatedCounter.incrementCounter();
  }
}
