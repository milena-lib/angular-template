import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-page',
  template: ''
})
export class BasePageComponent implements OnInit {
  subscriptions: Subscription[] = [];
  
  constructor() { 
  }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    
  }
}
