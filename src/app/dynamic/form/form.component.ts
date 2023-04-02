import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  constructor() { }

  fields: Array<PoDynamicFormField> = [
    {property: 'name', gridColumns: 6, placeholder: 'digite empresa', label: 'Empresa', divider: 'Complementos'},
    {property: 'a', gridColumns: 6, placeholder: 'digite Filial', label: 'Filial'},
    {property: 'd', gridColumns: 6, placeholder: 'digite Grupo de Material', label: 'Grupo de Material'},
    {property: 'f', gridColumns: 6, placeholder: 'digite Unidade de Medida', label: 'Unidade de Medida'},
    {property: 'g', gridColumns: 6, placeholder: 'digite Centro de custo', label: 'Centro de custo'},
    {property: 'h', gridColumns: 6, placeholder: 'digite Conta Contabil', label: 'Conta Contabil'},
    {property: 'j', gridColumns: 6, placeholder: 'digite NCM', label: 'NCM'},
    { property: 'comments', gridColumns: 6, rows: 5, label: 'Descrição', placeholder: 'Digite os comentários' }
  ]


  ngOnInit(): void {
  }

}
