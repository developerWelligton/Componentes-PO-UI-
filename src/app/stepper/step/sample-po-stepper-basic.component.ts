import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModalComponent, PoStepperComponent } from '@po-ui/ng-components';
import { Observable, of } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html'
})
export class SamplePoStepperBasicComponent {
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';
  confirmLabelWidget: string = 'Confirm Purchase';

  @ViewChild('successData', { static: true }) successData!: PoModalComponent;
  @ViewChild('paymentForm', { static: true }) paymentForm!: NgForm;
  poNotification: any;

  constructor(){}

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();
    stepper.first();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(),
      delay(2000),
      finalize(() => {
      })
    );
  }

}
