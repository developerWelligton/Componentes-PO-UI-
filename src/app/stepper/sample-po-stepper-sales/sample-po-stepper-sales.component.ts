import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalComponent, PoNotificationService, PoStepComponent, PoStepperComponent, PoStepperOrientation } from '@po-ui/ng-components';
import { Observable, of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-sales',
  templateUrl: './sample-po-stepper-sales.component.html'
})
export class SamplePoStepperSalesComponent {


  @ViewChild('addressForm', { static: true }) addressForm!: NgForm;
  @ViewChild('paymentForm', { static: true }) paymentForm!: NgForm;
  @ViewChild('personalForm', { static: true }) personalForm!: NgForm;
  @ViewChild('successData', { static: true }) successData!: PoModalComponent;

  address!: any ;
  birthday!: string;
  cardCode!: string ;
  cardName!: string ;
  cardValid!: string ;
  confirmLabelWidget: string = 'Confirm Purchase';
  currentActiveStep!: PoStepComponent ;
  document!: string ;
  isLoadingPayment: boolean = false;
  name!: string ;
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';

  constructor(private poNotification: PoNotificationService) {
    this.address = this.getAddress();
  }

  canActiveFinishStep(paymentForm: NgForm): Observable<boolean> {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoadingPayment = true)),
      delay(2000),
      finalize(() => {
        this.isLoadingPayment = false;
        this.poNotification.success('Pagamento concluído com sucesso!');
      })
    );
  }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    this.address = this.getAddress();
    stepper.first();
  }

  private getAddress() {
    return {
      city: 'Sao Paulo',
      code: '02511-000',
      country: 'Brazil',
      number: '1000',
      reference: '',
      street: 'Avenida Braz Leme'
    };
  }

  private resetForms(): void {
    this.personalForm.reset();
    this.paymentForm.reset();
  }
}
