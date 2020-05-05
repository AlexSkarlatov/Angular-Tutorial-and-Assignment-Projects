import {
  Component,
  ContentChild,
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
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
OnInit,
AfterContentInit,
OnChanges,
DoCheck,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,OnDestroy {
  @Input('exposedAlias') element: {type: string, name: string, content: string};
  @Input() name: string;
//exposing this proerty to the world
 @ViewChild('heading') header: ElementRef;
 @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;



  ngOnDestroy(){
    console.log('ngOnDestroy is being called is called !');
  }
  ngAfterContentChecked(){
    console.log('ngAFterContentChecked is being called is called !');
  }
  ngAfterContentInit(){
    console.log('AfterContentInit is been called!');
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngONChanges is called !');
    console.log(changes);
  }

  constructor() {
    console.log('constructor called!');
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log('text congtent: '+this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked is being called is called !');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit is been called!');
    console.log('text congtent: '+this.header.nativeElement.textContent);
  }
}
