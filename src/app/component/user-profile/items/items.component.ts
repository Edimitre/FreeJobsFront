import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';
import { ItemService } from '../../../service/item.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {




  constructor(private itemService:ItemService,private userService:UserService) { }

  itemList:Item[] = []

  item:Item = new Item()

  user:User = new User()
  
  ngOnInit(): void {
    this.userService.getUserByUserName()

    this.user = this.userService.user
    
    this.loadUserItems()
  }

  loadUserItems(){

    this.itemService.getUserItems().subscribe(res =>{

      this.itemList = res
    })

    
  }

  registerItem() {



    this.itemService.registerItem(this.item.name, this.item.itemImage, this.item.value, this.item.description)



  }

  onImgSelect(event: any) {
    this.item.itemImage = event.target.files[0]
  }




}
