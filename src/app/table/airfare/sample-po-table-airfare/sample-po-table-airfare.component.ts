import { AfterViewInit, Component, ViewChild } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';
import { SamplePoTableAirfareService } from '../service/sample-po-table-airfare.service';


@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService]
})
export class SamplePoTableAirfareComponent implements AfterViewInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent | any;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent | any;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'po-icon-finance',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon po-icon-delete', label: 'Remove' }
  ];
  columns: Array<PoTableColumn> = this.sampleAirfare.getColumns();
  columnsDefault: Array<PoTableColumn> | any;
  detail: any;
  items: Array<any> = this.sampleAirfare.getItems();
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any> | any;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;

  }


  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: `Would you like to add ${selectedItems.length} items to cart?`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(`${this.getDescription(item)} added succesfully`);
          break;
        case 'reserved':
          this.poNotification.warning(
            `${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation`
          );
          break;
        case 'closed':
          this.poNotification.error(`${this.getDescription(item)} is closed and not available anymore`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  details(item:any) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item:any) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event:any) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return `Airfare to ${item.destination} - ${item.initials}`;
  }

  private validateDiscount(item:any) {
    return item.disableDiscount;
  }
}
