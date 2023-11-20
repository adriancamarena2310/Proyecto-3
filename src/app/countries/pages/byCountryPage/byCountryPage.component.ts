import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html'
})
export class ByCountryPageComponent {


  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) { }

  searcByCountry( term: string ):void{
    this.countriesServices.serachCountry(term)
    .subscribe( countries =>{
      this.countries = countries;
    });
  }
}
