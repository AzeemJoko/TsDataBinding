import { Component } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent {
  count = 0;

  onClick(){
    this.count++;
  }
}
