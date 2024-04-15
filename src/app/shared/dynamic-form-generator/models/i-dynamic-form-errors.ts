import { Validators } from "@angular/forms";

export interface IDynamicFormErrors {
  name: string;
  text: string;
  rules: Validators[];
}
