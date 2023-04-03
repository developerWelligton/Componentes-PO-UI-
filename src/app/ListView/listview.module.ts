import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PoInfoModule, PoModule } from '@po-ui/ng-components';
import { ListViewRoutingModule } from './listview-routing.module';
import { SamplePoListViewBasicComponent } from './sample-po-list-view-basic/sample-po-list-view-basic.component';
import { SamplePoListViewHiringProcessesComponent } from './sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component';


@NgModule({
  declarations: [
    SamplePoListViewBasicComponent,
    SamplePoListViewHiringProcessesComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    ListViewRoutingModule,
    PoInfoModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListViewModule { }
