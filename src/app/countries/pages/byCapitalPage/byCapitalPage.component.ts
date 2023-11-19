import { Component } from '@angular/core';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html'
})
export class ByCapitalPageComponent  {

  constructor() { }

  searcByCapitla( term: string ):void{
    console.log("desde byCapitalPage");
    console.log( {term});
  }
}
