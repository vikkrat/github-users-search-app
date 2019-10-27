import { DetailsComponent } from './components/details/details.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'blocks',
    component: BlocksComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'table/:id',
    component: DetailsComponent
  },
  {
    path: 'blocks/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
