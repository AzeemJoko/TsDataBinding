import { Component } from '@angular/core';

@Component({
  selector: 'app-dbl-click',
  templateUrl: './dbl-click.component.html',
  styleUrls: ['./dbl-click.component.css']
})
export class DblClickComponent {
  message = '';
  
  onDoubleClick(){
    this.message = 'Look at the star';
    
  }
}
