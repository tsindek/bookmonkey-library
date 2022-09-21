import { Component } from '@angular/core';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-library';
}
