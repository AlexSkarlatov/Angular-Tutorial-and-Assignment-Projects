import { Component,  ContentChild,
   OnInit,
   Input,
  ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy, ViewChild, ElementRef
 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
OnInit,
AfterContentInit,
OnChanges,
DoCheck,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,OnDestroy {
  arr = new Array();
  evenVal: number;
  oddVal: number;
  x: {timeElapsed: number};
  y: number;
  onIntervalPulse(timeObject: {timeElapsed: number}){
    console.log(timeObject.timeElapsed);
    this.arr.push(timeObject.timeElapsed);
    if(timeObject.timeElapsed % 2 === 0){
    this.evenVal = timeObject.timeElapsed;
    }
    else{
      // this.x = this.arr.pop();
      // this.y= this.x.timeElapsed;
      // this.oddVal = this.y;
      this.oddVal = timeObject.timeElapsed;
    }
    console.log('the value of oddVal is : ' + this.oddVal);
  }
  //
  //here create array to store values and use the on change lifecycle hook

  ngOnDestroy(){
    console.log('ngOnDestroy is being called is called !');
  }
  ngAfterContentChecked(){
    console.log('ngAFterContentChecked is being called is called !');
  }
  ngAfterContentInit(){
    console.log('AfterContentInit is been called!');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngONChanges is called !');
    console.log(changes);
    //console.log(this.arr);
  }

  constructor() {
    console.log('constructor called!');
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log('text congtent: '+this.header.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
    console.log(this.arr);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked is being called is called !');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit is been called!');

  }

}
