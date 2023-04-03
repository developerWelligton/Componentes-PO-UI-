

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoListViewBasicComponent } from './sample-po-list-view-basic/sample-po-list-view-basic.component';
import { SamplePoListViewHiringProcessesComponent } from './sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component';

const routes: Routes = [
  { path: 'listviewbasic', component: SamplePoListViewBasicComponent},
  { path: 'hiringprocesses', component: SamplePoListViewHiringProcessesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListViewRoutingModule { }
