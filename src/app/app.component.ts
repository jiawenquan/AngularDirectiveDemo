import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AngularDirectiveDemo';
  items = [1, 2, 3, 4, 5, 6, 7];

  onDelete(item) {
    console.log('item' + item);
  }
}
