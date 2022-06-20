import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  constructor() { }

  priority = false ;

  ngOnInit(): void {
  }

  togglePriority()
{
  this.priority =!this.priority ;
  console.log("jdhjhf")
}
}
