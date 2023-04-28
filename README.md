# GettingStart

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) versão 12.2.1 e com [PO UI](https://po-ui.io) versão 5.8.0, durante o webinar no [TOTVS Developers](https://developers.totvs.com) sobre PO UI.

## Development server

Execute `ng serve` para subir o servidor de desenvolvimento. Navegue para `http://localhost:4200/`.
-------------------------------------------------------------------------------
$ ng g m checkbox
ng g c checkbox/sample-po-checkbox-basic
add routing: checkbox-routing.module.ts

padrão
<po-page-default p-title="Simple"> 
</po-page-default>

no module add 
 imports: [
    CommonModule,
    PoModule,
    PoInfoModule
  ]


add lazyload in app-routing.module.ts   

{path: 'checkbox', loadChildren:() => import('./checkbox/checkbox.module').then(m => m.CheckboxModule)},


add in app.component route

{ label: 'Checkbox', shortLabel: 'Checkbox', icon: 'po-icon-table', subItems: [
      {label: 'Checkbox', shortLabel: 'Single', link: 'checkbox/checkboxBasic', icon: 'po-icon-star' }
    ]

dont forget add module in the file created

add in your module
CheckboxRoutingModule
-----------------------------------------------------------------------------------------

create a new component dentro module ready created
ng g c checkbox/sample-po-checkbox-acceptance-term

put logic component

to import component lack PO UI so import them dentro do module
  PoCheckboxGroupModule
  
after
add inside component router

  { path: 'checkAcceptanceTerm', component: SamplePoCheckboxAcceptanceTermComponent},

lazy load já foi carregado entao nao precisa se preocupar

adicionar uma nova na rota raiz

{ label: 'Checkbox', shortLabel: 'Checkbox', icon: 'po-icon-table', subItems: [
      {label: 'Checkbox Basic', shortLabel: 'Checkbox', link: 'checkbox/checkboxBasic', icon: 'po-icon-star' },
      ]
    },

    aqui  
    {label: 'Checkbox Acceptance Term', shortLabel: 'Acceptance Term', link: 'checkbox/checkAcceptanceTerm', icon: 'po-icon-star' },  
    
  


