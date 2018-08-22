import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit
{
  @Input( ) workout Workout;

  @Output( ) back = new EventEmitter<string>( );

  constructor( ) { }

  ngOnInit() { }

  onClick( ): void
  {
    this.back.emit( "dummy" );
  }
}
