import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { SamplePoStepperBasicComponent } from './step/sample-po-stepper-basic.component';
import { StepperRoutingModule } from './step-routing.module';


@NgModule({
  declarations: [
    SamplePoStepperBasicComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    StepperRoutingModule

  ]
})
export class StepperModule { }
