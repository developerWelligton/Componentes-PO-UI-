

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoListViewBasicComponent } from './sample-po-list-view-basic/sample-po-list-view-basic.component';

const routes: Routes = [
  { path: 'listviewbasic', component: SamplePoListViewBasicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListViewRoutingModule { }
