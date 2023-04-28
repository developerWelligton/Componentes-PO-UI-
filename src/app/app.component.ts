import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/', icon: 'po-icon-home', shortLabel: 'Home' },

    { label: 'Table', shortLabel: 'Table', icon: 'po-icon-table',
      subItems: [
        { label: 'Simple', shortLabel: 'Single', link: 'table/simple', icon: 'po-icon-star' },
        { label: 'Service', shortLabel: 'Service', link: 'table/service', icon: 'po-icon-star-filled'},
        { label: 'Airfare', shortLabel: 'Airfare', link: 'table/airfare', icon: 'po-icon-star-filled'},
        { label: 'Table Heroes', shortLabel: 'Table Heroes', link: 'table/sampletableheroes', icon: 'po-icon-star-filled'},
      ]
    },

    { label: 'Dynamic', link: 'dynamic/form', icon: 'po-icon-user', shortLabel: 'Dynamic'},

    { label: 'Stepper', shortLabel: 'Step', icon: 'po-icon-table',
      subItems: [
        { label: 'Stepper Basic', shortLabel: 'Single', link: 'step/step', icon: 'po-icon-star'},
        { label: 'Stepper Sales', shortLabel: 'Single', link: 'step/stepsales', icon: 'po-icon-star'},
        ]
    },

    { label: 'List View', shortLabel: 'List View', icon: 'po-icon-table',
      subItems: [
        {label: 'List View', shortLabel: 'Single', link: 'listview/listviewbasic', icon: 'po-icon-star'},
        {label: 'List View', shortLabel: 'Single', link: 'listview/hiringprocesses', icon: 'po-icon-star'},
      ]
    },

    { label: 'Checkbox', shortLabel: 'Checkbox', icon: 'po-icon-table',
      subItems: [
          {label: 'Checkbox Basic', shortLabel: 'Checkbox', link: 'checkbox/checkboxBasic', icon: 'po-icon-star'},
          {label: 'Checkbox Acceptance Term', shortLabel: 'Acceptance Term', link: 'checkbox/checkAcceptanceTerm', icon: 'po-icon-star'},
        ]
    },

    { label: 'Tree View', shortLabel: 'Tree View', icon: 'po-icon-table',
      subItems: [
          {label: 'Tree View Folder Structure', shortLabel: 'Folder Structure', link: 'treeview/treeViewFolderStructure', icon: 'po-icon-star'},
          ]
    },

    { label: 'Chart', shortLabel: 'Chart', icon: 'po-icon-table',
      subItems: [
          {label: 'PO Chart Basic', shortLabel: 'Chart Basic', link: 'chart/chartBasic', icon: 'po-icon-star'},
          ]
    },
  ];

}
