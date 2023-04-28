import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePoCheckboxBasicComponent } from './sample-po-checkbox-basic/sample-po-checkbox-basic.component';
import { PoInfoModule, PoModule } from '@po-ui/ng-components';
import { CheckboxRoutingModule } from './checkbox-routing.module';



@NgModule({
  declarations: [
    SamplePoCheckboxBasicComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoInfoModule,
    CheckboxRoutingModule
  ]
})
export class CheckboxModule { }
