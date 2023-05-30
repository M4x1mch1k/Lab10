import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reader } from '../myform/Class/Reader';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})



export class ViewformComponent  implements OnInit {
  show_update: boolean = false;
  readers: Reader[] = [];
  constructor() { }

  ngOnInit() {}

  addReader(event: any){
    if (event as Reader){
      let reader: Reader = event;
      this.readers.push(reader);
      console.log(this.readers);
    }else{
      throw new Error("Error of type");
    }
  }

  update() { this.show_update = true; }
  
  showUp(event: any) {
    if (typeof event === "boolean") { this.show_update = event }
    else
      throw new Error("Error of type")
  }

  updateSave(event: any, i: number) {
    if (event as Reader) {
      this.readers[i] = event;
    } else throw new Error("Error of type")
  }

}
