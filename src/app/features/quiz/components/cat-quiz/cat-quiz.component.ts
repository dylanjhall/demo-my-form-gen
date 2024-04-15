import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../../../../shared/dynamic-form-generator/components/dynamic-form/dynamic-form.component';
import { IDynamicField } from '../../../../shared/dynamic-form-generator/models/i-dynamic-field';
import { errors, quizFormFields } from './cat-quiz.constants';
import { KeyValue } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat-quiz',
  templateUrl: './cat-quiz.component.html',
  styleUrls: ['./cat-quiz.component.css'],
  standalone: true,
  imports: [DynamicFormComponent, ReactiveFormsModule]
})
export class CatQuizComponent implements OnInit {
  submitQuiz() {
    throw new Error('Method not implemented.');
  }
  quizFormFields = quizFormFields;
  errors = errors;
  quizForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  getQuizData(): KeyValue<string, any>[] {
    return [{ 'key': 'Kitty', 'value': 'Male' }]
  }

  getFormFields(): IDynamicField[] {
    return this.quizFormFields// Fetch form fields from API or constants
  }

}
