import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePoTreeViewFolderStructureComponent } from './sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component';
import { PoModule, PoTreeViewModule } from '@po-ui/ng-components';
import { TreeViewRoutingModule } from './treeview-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    SamplePoTreeViewFolderStructureComponent
  ],
  imports: [
    TreeViewRoutingModule,
    CommonModule,
    PoTreeViewModule,
    PoModule

  ]
})
export class TreeViewModule { }
