import { Component, OnInit, Input,ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() evenValue: string;
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
