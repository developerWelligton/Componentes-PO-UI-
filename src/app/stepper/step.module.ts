import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule, PoStepperModule, PoWidgetModule } from '@po-ui/ng-components';
import { SamplePoStepperBasicComponent } from './step/sample-po-stepper-basic.component';
import { StepperRoutingModule } from './step-routing.module';
import { SamplePoStepperSalesComponent } from './sample-po-stepper-sales/sample-po-stepper-sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SamplePoStepperBasicComponent,
    SamplePoStepperSalesComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    StepperRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StepperModule { }
