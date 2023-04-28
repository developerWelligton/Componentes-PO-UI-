import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePoCheckboxBasicComponent } from './sample-po-checkbox-basic/sample-po-checkbox-basic.component';
import { PoCheckboxComponent, PoCheckboxGroupModule, PoInfoModule, PoModule } from '@po-ui/ng-components';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { SamplePoCheckboxAcceptanceTermComponent } from './sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component';



@NgModule({
  declarations: [
    SamplePoCheckboxBasicComponent,
    SamplePoCheckboxAcceptanceTermComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoInfoModule,
    CheckboxRoutingModule,
    PoCheckboxGroupModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxModule { }
