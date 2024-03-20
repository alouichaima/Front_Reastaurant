import { Component } from '@angular/core';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listMenu:any;
  menu!:MenuItem;
 
  


  constructor(private menuservice:MenuitemService){}
  ngOnInit(): void {
    this.getMenuItems();
   
  }
 
    getMenuItems(){
    this.menuservice.getMenuItems().subscribe(res => this.listMenu = res)
  }


}
