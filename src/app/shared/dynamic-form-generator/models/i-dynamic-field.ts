import { Validators } from "@angular/forms";
import { DynamicFieldTypes } from "./dynamic-field-types.enum";

export interface IDynamicField {
  name: string;
  type: DynamicFieldTypes;
  children?: IDynamicField[];
  defaultValue?: any;
  disabled?: boolean;
  options?: string[];
  parent?: string;
  validation?: Validators[];
  visible?: boolean;
}
