import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  styles: [
  ]
})
export class SamplePoCheckboxAcceptanceTermComponent  {


  @ViewChild(PoModalComponent, { static: true }) modalTerm!: PoModalComponent;

  acceptance: any = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };

}
