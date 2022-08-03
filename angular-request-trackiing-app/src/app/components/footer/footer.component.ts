import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  today: number = Date.now();
  rating3: number;
  public form: FormGroup;
  constructor(private fb: FormBuilder,private toastr: ToastrService) 
    {
      this.rating3 = 0;
      this.form = this.fb.group({
      });
    }

  ngOnInit(): void {
    timer(0,1000).subscribe(()=>{
      this.today = Date.now();
    })
  }

  showSuccess() {
    this.toastr.success('We will do better next time', "Than you very much!" ,
    {
      timeOut:1000,
    });
  }
 

}
