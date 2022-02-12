import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Childs } from '../shared/interface/child';
import { ChildService } from '../shared/services/child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor(public childservice: ChildService) { }

  Data: Childs[ ] = [ ];
  NoData: any;

  @Input() id: string = "";
   getData(){
    this.childservice.getJSON().subscribe((data) => {
      this.Data = data;
      this.Data = this.Data.filter((data : any) => data.Id === this.id);
    })
   }
  ngOnInit(): void {
    this.getData()
  }

  ngOnChanges(){
    this.getData()
  }
  

}
