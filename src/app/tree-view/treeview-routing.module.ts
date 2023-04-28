
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePoTreeViewFolderStructureComponent } from './sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component';

const routes: Routes = [
  { path: 'treeViewFolderStructure', component: SamplePoTreeViewFolderStructureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeViewRoutingModule { }
