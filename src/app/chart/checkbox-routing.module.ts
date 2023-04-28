

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoChartBasicComponent } from './sample-po-chart-basic/sample-po-chart-basic.component';

const routes: Routes = [
  { path: 'chartBasic', component: SamplePoChartBasicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
