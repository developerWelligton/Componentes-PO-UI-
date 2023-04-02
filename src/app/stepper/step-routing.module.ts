import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoStepperBasicComponent } from './step/sample-po-stepper-basic.component';


const routes: Routes = [
  {path: 'step', component: SamplePoStepperBasicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
