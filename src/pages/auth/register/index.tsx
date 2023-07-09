import React, { useState } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import {
  RegisterForm,
  AuthForm,
  RegisterStep1Form,
  RegisterStep2Form,
  RegisterStep3Form,
} from "src/components/auth";
import { useFunnel, useRegisterMutation } from "src/hooks";

export default function AuthRegisterPage() {
  const [Funnel, setStep] = useFunnel(["step1", "step2", "step3"] as const);
  const [formState, setFormState] = useState<{
    step1: RegisterStep1Form | undefined;
    step2: RegisterStep2Form | undefined;
    step3: RegisterStep3Form | undefined;
  }>({ step1: undefined, step2: undefined, step3: undefined });

  const router = useRouter();
  const registerMutation = useRegisterMutation();

  const handleOnSubmit = (formSteps: typeof formState) => {
    if (!formSteps.step1) setStep("step1");
    else if (!formSteps.step2) setStep("step2");
    else if (!formSteps.step3) setStep("step3");

    if (!formSteps.step1 || !formSteps.step2 || !formSteps.step3)
      return toast.warn("회원가입 폼에 올바른 정보를 입력해주세요");

    const { email, password } = formSteps.step1;
    const { name, ...student } = formSteps.step2;

    registerMutation.mutate(
      { email, password, name, student },
      {
        onSuccess: () => {
          toast.success("회원가입이 완료되었어요");
          router.push("/auth/login");
        },
        onError: ({ response }) => toast.error(response?.data.message),
      }
    );
  };

  return (
    <AuthForm.Layout name="회원가입" description="회원가입 후 한세톤에 참여해보세요 !">
      <Funnel>
        <Funnel.Step name="step1">
          <RegisterForm.Step1
            values={formState.step1}
            onNext={(step1) => {
              setFormState((prev) => ({ ...prev, step1 }));
              setStep("step2");
            }}
          />
        </Funnel.Step>

        <Funnel.Step name="step2">
          <RegisterForm.Step2
            values={formState.step2}
            onNext={(step2) => {
              setFormState((prev) => ({ ...prev, step2 }));
              setStep("step3");
            }}
            onPrev={() => setStep("step1")}
          />
        </Funnel.Step>

        <Funnel.Step name="step3">
          <RegisterForm.Step3
            loading={registerMutation.isLoading}
            values={formState.step3}
            onNext={(step3) => {
              setFormState((prev) => ({ ...prev, step3 }));
              handleOnSubmit({ ...formState, step3 });
            }}
            onPrev={() => setStep("step2")}
          />
        </Funnel.Step>
      </Funnel>
    </AuthForm.Layout>
  );
}
