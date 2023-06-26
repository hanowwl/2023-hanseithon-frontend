import { RegisterStep1, RegisterStep1Form } from "./Step1";
import { RegisterStep2, RegisterStep2Form } from "./Step2";
import { RegisterStep3, RegisterStep3Form } from "./Step3";

export type RegisterForms = RegisterStep1Form & RegisterStep2Form & RegisterStep3Form;
export type { RegisterStep1Form, RegisterStep2Form, RegisterStep3Form };

export interface RegisterStepProps<T> {
  onNext?: (formValues: T) => void;
}

export const RegisterForm = Object.assign(
  {},
  { Step1: RegisterStep1, Step2: RegisterStep2, Step3: RegisterStep3 }
);
