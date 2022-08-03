import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition(':enter,:leave',[
        animate(2000)
      ])
    ])
  ],
  
})
export class LandingPageComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {}

}
