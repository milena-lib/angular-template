import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  moviesFormGroup!: FormGroup;
  @Output() searchParam: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.moviesFormGroup = this.formBuilder.group ({
      search: ['']
    });
  }

  get f(){
    return this.moviesFormGroup.controls;
  }

  onSubmit() {
    this.searchParam.emit(this.moviesFormGroup.controls['search'].value);
  }

  clearField(val: string) {
    this.moviesFormGroup.controls[val].setValue('');
  }

}
