import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

private dbouncer: Subject<string> = new Subject<string>();
private debouncerSuscription?: Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe;
  }
  ngOnInit(): void {
    this.debouncerSuscription = this.dbouncer
    .pipe(
      debounceTime( 1000 )
    ).subscribe( value =>
      this.onDebounce.emit(  value )
      )
  }

@Input()
public placeholder: string = "";

@Input()
public initialValue: string = '';

@Output()
public onValue = new EventEmitter<string>();

@Output()
public onDebounce = new EventEmitter<string>();

emitValue( value: string):void{
   this.onValue.emit( value );
}

onKeyPress( searchTerm: string){
 this.dbouncer.next( searchTerm );
}

}
