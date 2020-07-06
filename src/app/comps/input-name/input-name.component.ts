import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/model/personDB';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {
  myName(x){
    
    this.fulName=x
    console.log(this.fulName);
    console.log(this.fulName.firstName);

    
  }
  fulName:Persons =new Persons();
  constructor() { }
 

  ngOnInit(): void {
  }

}
