import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';

const routes: Routes = [
  { path: '', component: BookListPageComponent },
  { path: 'administration', component: AdministrationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
