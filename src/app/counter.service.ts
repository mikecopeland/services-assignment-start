import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  counter = 0;

  constructor() { }

  incrementCounter() {
    this.counter++;
  }

}