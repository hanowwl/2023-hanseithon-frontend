import React, { useState } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import { RegisterForms, RegisterForm, AuthForm } from "src/components/auth";
import { useFunnel, useRegisterMutation } from "src/hooks";

export default function AuthRegisterPage() {
  const [Funnel, setStep] = useFunnel(["step1", "step2", "step3"] as const);
  const [formState, setFormState] = useState<Partial<RegisterForms>>({});

  const router = useRouter();
  const registerMutation = useRegisterMutation();

  const handleOnSubmit = () => {
    if (!formState) return;
    const { email, password, passwordVerify, name, ...student } = formState as RegisterForms;

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
            onNext={(values) => {
              setFormState({ ...values });
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
            loading={registerMutation.isLoading}
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
