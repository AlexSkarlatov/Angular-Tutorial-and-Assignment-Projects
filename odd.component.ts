import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddValue: string;
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
