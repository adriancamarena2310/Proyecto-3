import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html'
})
export class ByCountryPageComponent implements OnInit {


  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountries.term;
  }

  searcByCountry( term: string ):void{
    this.countriesServices.serachCountry(term)
    .subscribe( countries =>{
      this.countries = countries;
    });
  }
}
