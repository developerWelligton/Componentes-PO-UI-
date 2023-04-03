import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PoModule } from '@po-ui/ng-components';
import { ListViewRoutingModule } from './listview-routing.module';
import { SamplePoListViewBasicComponent } from './sample-po-list-view-basic/sample-po-list-view-basic.component';


@NgModule({
  declarations: [
    SamplePoListViewBasicComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    ListViewRoutingModule
  ]
})
export class ListViewModule { }
