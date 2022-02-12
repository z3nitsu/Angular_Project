import { Component, OnInit } from '@angular/core';
import { ParentService } from '../shared/services/parent.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Data: any; 
  id: any;
  childLoad: boolean = false
  constructor(public parentservice: ParentService) { }

  ngOnInit(): void {
    this.parentservice.getJSON().subscribe((data) => {
      console.log(data);
      this.Data = data
    })
  }

  ngDropDwonClick(clickevent: any){
    this.id = clickevent;
    console.log(clickevent);
    this.childLoad = true;
  }
  



}
