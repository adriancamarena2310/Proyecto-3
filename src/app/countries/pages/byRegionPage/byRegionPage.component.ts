import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html'
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa' , 'America' , 'Asia' , 'Europe' , 'Oceania']
  public selectedRegion?: Region;

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
  }

  searcByRegion( region: Region ):void{
    this.selectedRegion = region

    this.countriesServices.serachRegion( region )
    .subscribe( countries =>{
      this.countries = countries;
    });
  }
}
