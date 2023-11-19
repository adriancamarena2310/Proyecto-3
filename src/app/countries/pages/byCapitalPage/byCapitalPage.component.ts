import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html'
})
export class ByCapitalPageComponent  {

  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) { }

  searcByCapitla( term: string ):void{
    this.countriesServices.searchCapital(term)
    .subscribe( countries =>{
      this.countries = countries;
    });
  }
}
