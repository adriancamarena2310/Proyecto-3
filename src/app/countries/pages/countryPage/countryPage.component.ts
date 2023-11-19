import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-countryPage',
  templateUrl: './countryPage.component.html'
})
export class CountryPageComponent implements OnInit {

  constructor( private activetedRoute: ActivatedRoute,
    private CountriesService: CountriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.activetedRoute.params
    .pipe(
      switchMap( ({ id }) => this.CountriesService.seacrchCountryByAlphaCode( id )),
    )
    .subscribe( country => {

      if( !country){
        return this.router.navigateByUrl('');
      }

      console.log("Tenemos un pais");
      return;
    } )
  }

}
