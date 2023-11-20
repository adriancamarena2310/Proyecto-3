import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html'
})
export class ByCapitalPageComponent  implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searcByCapitla( term: string ):void{
   this.isLoading = true;

    this.countriesServices.searchCapital(term)
    .subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
