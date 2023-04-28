

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoCheckboxBasicComponent } from './sample-po-checkbox-basic/sample-po-checkbox-basic.component';

const routes: Routes = [
  { path: 'checkboxBasic', component: SamplePoCheckboxBasicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxRoutingModule { }
