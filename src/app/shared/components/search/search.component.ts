import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showsFormGroup!: FormGroup;
  @Output() searchParam: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.showsFormGroup = this.formBuilder.group ({
      search: ['']
    });
  }

  get f(){
    return this.showsFormGroup.controls;
  }

  onSubmit() {
    debugger;
    
    this.searchParam.emit(this.showsFormGroup.controls['search'].value);
  }

  clearField(val: string) {
    this.showsFormGroup.controls[val].setValue('');
  }

}
