import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  siteKey:string='6LcDP7AZAAAAAEiwWaDC0IkoGJjWuMhcuPhGvkzA';

  constructor() {}

  ngOnInit(): void {
    this.siteKey;
  }

}
