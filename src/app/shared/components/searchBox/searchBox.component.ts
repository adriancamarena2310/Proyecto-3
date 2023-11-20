import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit{

private dbouncer: Subject<string> = new Subject<string>();

  constructor() { }
  ngOnInit(): void {
    this.dbouncer.pipe(
      debounceTime( 1000 )
    ).subscribe( value =>
      this.onDebounce.emit(  value )
      )
  }

@Input()
public placeholder: string = "";

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
