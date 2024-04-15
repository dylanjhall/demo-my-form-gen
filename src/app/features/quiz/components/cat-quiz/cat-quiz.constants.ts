import { Validators } from "@angular/forms";
import { DynamicFieldSelectorComponent } from "../../../../shared/dynamic-form-generator/components/dynamic-field-selector/dynamic-field-selector.component";
import { DynamicFieldTypes } from "../../../../shared/dynamic-form-generator/models/dynamic-field-types.enum";
import { IDynamicField } from "../../../../shared/dynamic-form-generator/models/i-dynamic-field";

export const quizFormFields: IDynamicField[] = [
  {
    name: 'catName',
    type: DynamicFieldTypes.TEXTFIELD,
    validation: [Validators.required, Validators.maxLength(25)],
    visible: true
  },
  {
    name: 'catGender',
    type: DynamicFieldTypes.RADIO,
    options: ['male', 'female'],
    validation: [Validators.required],
    visible: true
  },

];

export const errors: any[] = [
  {
    name: 'required',
    text: 'This field is required.',
    rules: ['dirty']
  },
  {
    name: 'maxlength',
    text: 'This field cannot exceed 25 characters.',
    rules: ['dirty']
  }
];
