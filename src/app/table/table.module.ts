import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { ServiceComponent } from './service/service.component';
import { PoModule } from '@po-ui/ng-components';
import { SamplePoTableAirfareComponent } from './airfare/sample-po-table-airfare.component';
import { SamplePoTableHeroesComponent } from './sample-po-table-heroes/sample-po-table-heroes.component';


@NgModule({
  declarations: [
    SimpleComponent,
    ServiceComponent,
    SamplePoTableAirfareComponent,
    SamplePoTableHeroesComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    TableRoutingModule
  ]
})
export class TableModule { }
