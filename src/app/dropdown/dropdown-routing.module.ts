import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';

const routes: Routes = [
  {path: 'dropdownBasic', component: DropdownBasicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule { }
