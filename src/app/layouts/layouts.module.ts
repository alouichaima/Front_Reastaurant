import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './admin-layout/menu-item/menu-item.component';
import { AddItemComponent } from './admin-layout/menu-item/add-item/add-item.component';
import { UpdateItemComponent } from './admin-layout/menu-item/update-item/update-item.component';



@NgModule({
  declarations: [
    MenuItemComponent,
    AddItemComponent,
    UpdateItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
