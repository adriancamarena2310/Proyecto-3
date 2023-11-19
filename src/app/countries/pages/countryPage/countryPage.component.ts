import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countryPage',
  templateUrl: './countryPage.component.html'
})
export class CountryPageComponent implements OnInit {

  constructor( private activetedRoute: ActivatedRoute,
    private CountriesService: CountriesService) { }

  ngOnInit(): void {
    this.activetedRoute.params
    .subscribe( ({ id }) => {

      this.CountriesService.seacrchCountryByAlphaCode( id )
      .subscribe( country =>{
        console.log( {country} );

      })
    } )
  }

}
