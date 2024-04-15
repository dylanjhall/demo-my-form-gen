import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { IDynamicField } from '../../models/i-dynamic-field';
import { DynamicFieldTypes } from '../../models/dynamic-field-types.enum';
import { SentenceCasePipe } from '../../pipes/sentence-case.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'lib-dynamic-field-selector',
  templateUrl: './dynamic-field-selector.component.html',
  styleUrls: ['./dynamic-field-selector.component.css'],
  imports: [
    SentenceCasePipe,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule],
  standalone: true
})
export class DynamicFieldSelectorComponent implements OnInit {

  @Input() field!: IDynamicField;
  public control!: UntypedFormControl;
  public FieldType = DynamicFieldTypes;
  constructor(private formGroupDir: FormGroupDirective) { }

  ngOnInit() {
    /**
    * @angular/forms -> FormGroupDirective! 🎉
    *
    * https://angular.io/api/forms/FormGroupDirective
    * "Binds an existing FormGroup to a DOM element."
    *
    * We can easily access Reactive Forms functionality from this component in our
    * parent component without the need to pass our own inputs or event emitters.
    */
    this.control = this.formGroupDir.control.get(this.field.name) as UntypedFormControl;
  }

}
