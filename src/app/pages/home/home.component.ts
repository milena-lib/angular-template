import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.personFormGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(18)]]
    });
  }
  
  get f(){
    return this.personFormGroup.controls;
  }

  clearField(val: string) {
    this.personFormGroup.controls[val].setValue('');
  }
  
  onSubmit(){
    // this.isSubmitted = true;
    
  }

}
