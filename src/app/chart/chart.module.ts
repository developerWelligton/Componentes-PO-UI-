import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePoChartBasicComponent } from './sample-po-chart-basic/sample-po-chart-basic.component';
import { PoInfoModule, PoModule, PoWidgetModule } from '@po-ui/ng-components';
import { ChartRoutingModule } from './checkbox-routing.module';
import { SamplePoChartCoffeeRankingComponent } from './sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component';



@NgModule({
  declarations: [
    SamplePoChartBasicComponent,
    SamplePoChartCoffeeRankingComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoInfoModule,
    ChartRoutingModule,
    PoWidgetModule
  ]
})
export class ChartModule { }
