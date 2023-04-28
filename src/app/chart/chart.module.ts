import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePoChartBasicComponent } from './sample-po-chart-basic/sample-po-chart-basic.component';
import { PoInfoModule, PoModule } from '@po-ui/ng-components';
import { ChartRoutingModule } from './checkbox-routing.module';



@NgModule({
  declarations: [
    SamplePoChartBasicComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoInfoModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
