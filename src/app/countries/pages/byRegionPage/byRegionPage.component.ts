import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html'
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) { }

  searcByRegion( term: string ):void{
    this.countriesServices.serachRegion(term)
    .subscribe( countries =>{
      this.countries = countries;
    });
  }
}
