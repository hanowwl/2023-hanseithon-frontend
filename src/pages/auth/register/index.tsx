import React, { useState } from "react";

import { RegisterForms, RegisterForm, AuthForm } from "src/components/auth";
import { useFunnel } from "src/hooks";

export default function AuthRegisterPage() {
  const [Funnel, setStep] = useFunnel(["step1", "step2", "step3"] as const);
  const [formState, setFormState] = useState<RegisterForms | object>({});

  const handleOnSubmit = () => {
    console.log(formState);
  };

  return (
    <AuthForm.Layout name="회원가입" description="">
      <Funnel>
        <Funnel.Step name="step1">
          <RegisterForm.Step1
            onNext={(values) => {
              setFormState((prev) => ({ ...prev, ...values }));
              setStep("step2");
            }}
          />
        </Funnel.Step>

        <Funnel.Step name="step2">
          <RegisterForm.Step2
            onNext={(values) => {
              setFormState((prev) => ({ ...prev, ...values }));
              setStep("step3");
            }}
          />
        </Funnel.Step>

        <Funnel.Step name="step3">
          <RegisterForm.Step3
            onNext={(values) => {
              setFormState((prev) => ({ ...prev, ...values }));
              handleOnSubmit();
            }}
          />
        </Funnel.Step>
      </Funnel>
    </AuthForm.Layout>
  );
}
