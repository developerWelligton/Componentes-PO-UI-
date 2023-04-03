import {  SamplePoTableAirfareComponent } from './airfare/sample-po-table-airfare.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { SimpleComponent } from './simple/simple.component';
import { SamplePoTableHeroesComponent } from './sample-po-table-heroes/sample-po-table-heroes.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'airfare', component: SamplePoTableAirfareComponent},
  { path: 'sampletableheroes', component: SamplePoTableHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
