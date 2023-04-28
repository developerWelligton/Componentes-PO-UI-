

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoCheckboxBasicComponent } from './sample-po-checkbox-basic/sample-po-checkbox-basic.component';
import { SamplePoCheckboxAcceptanceTermComponent } from './sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component';

const routes: Routes = [
  { path: 'checkboxBasic', component: SamplePoCheckboxBasicComponent},
  { path: 'checkAcceptanceTerm', component: SamplePoCheckboxAcceptanceTermComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxRoutingModule { }
