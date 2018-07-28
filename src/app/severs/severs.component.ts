import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severs',
  templateUrl: './severs.component.html',
  styleUrls: ['./severs.component.css']
})
export class SeversComponent implements OnInit {
  makeBtnDisabled = true;
  serverIsAdded = "";
  constructor() {
      setTimeout(() => {
        this.makeBtnDisabled = false;
      }, 2000);
  
    
  }

  ngOnInit() {
  }

  displayClickEventAlert = (e : any) => {
    this.serverIsAdded = "Server was created!!"
    console.log("Event is fired!!",this.makeBtnDisabled);
    console.log("Event Data"+JSON.stringify(e));
  }
}
