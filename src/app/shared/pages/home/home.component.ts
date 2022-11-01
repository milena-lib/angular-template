import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = 'Clear me';
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  
  constructor() { }

  ngOnInit(): void {
    console.log("home page");
    debugger;
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

}
