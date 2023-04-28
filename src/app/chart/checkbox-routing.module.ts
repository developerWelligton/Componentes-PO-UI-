

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoChartBasicComponent } from './sample-po-chart-basic/sample-po-chart-basic.component';
import { SamplePoChartCoffeeRankingComponent } from './sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component';

const routes: Routes = [
  { path: 'chartBasic', component: SamplePoChartBasicComponent},
  { path: 'chartCoffeeRanking', component: SamplePoChartCoffeeRankingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
