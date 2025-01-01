import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { User } from './user';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  personFormGroup!: FormGroup;

  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  myControl = new FormControl<string | User>('');
  
  filteredOptions: Observable<User[]>;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.personFormGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(18)]]
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => {
        const name = typeof val === 'string' ? val : val?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
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

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
