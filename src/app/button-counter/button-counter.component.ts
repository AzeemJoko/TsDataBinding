import { Component } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent {
  count = 0;
  message = '';

  onClick(){
    this.count++;
  }
  onDoubleClick(){
    if(this.message ==''){
      this.message = "Look at the star";
    }else{
      this.message = '';
    }
    
  }
}
