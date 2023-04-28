import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';
import { PoInfoModule, PoModule } from '@po-ui/ng-components';
import { DropdownRoutingModule } from './dropdown-routing.module';



@NgModule({
  declarations: [
    DropdownBasicComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoInfoModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }
