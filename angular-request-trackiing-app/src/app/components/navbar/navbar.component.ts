
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor() { 
  }

  ngOnInit(): void {
    $(window).scroll(function () {
    
      if ($(window).scrollTop()) {
          $("nav").addClass("fixed");
          }
          else {
          $("nav").removeClass("fixed");
          }
  })
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    
    toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
        })
  }

}
