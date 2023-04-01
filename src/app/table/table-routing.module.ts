import {  SamplePoTableAirfareComponent } from './airfare/sample-po-table-airfare/sample-po-table-airfare.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'airfare', component: SamplePoTableAirfareComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
