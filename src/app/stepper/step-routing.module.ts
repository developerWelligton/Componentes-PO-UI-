import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoStepperBasicComponent } from './step/sample-po-stepper-basic.component';
import { SamplePoStepperSalesComponent } from './sample-po-stepper-sales/sample-po-stepper-sales.component';


const routes: Routes = [
  {path: 'step', component: SamplePoStepperBasicComponent},
  {path: 'stepsales', component: SamplePoStepperSalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
