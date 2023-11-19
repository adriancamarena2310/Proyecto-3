import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {

  constructor() { }

@Input()
public placeholder: string = "";

}
