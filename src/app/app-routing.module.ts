
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)},
  {path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule)},
  {path: 'dynamic', loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule)},
  {path: 'step', loadChildren: () => import('./stepper/step.module').then(m => m.StepperModule) },
  {path: 'listview', loadChildren: () => import('./ListView/listview.module').then(m => m.ListViewModule)},
  {path: 'checkbox', loadChildren:() => import('./checkbox/checkbox.module').then(m => m.CheckboxModule)},
  {path: 'treeview', loadChildren:() => import('./tree-view/tree-view.module').then(m => m.TreeViewModule)},
  {path: 'chart', loadChildren:() => import('./chart/chart.module').then(m => m.ChartModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
