import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html'
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa','America','Asia','Europe','Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesServices: CountriesService) { }

  searcByRegion( region: Region ):void{
    this.selectedRegion = region

    this.countriesServices.serachRegion( region )
    .subscribe( countries =>{
      this.countries = countries;
    });
  }
}
