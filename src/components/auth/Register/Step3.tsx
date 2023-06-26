import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Button, Checkbox } from "src/components/common";

import { AuthForm } from "../AuthForm";

import { RegisterStepProps } from ".";

export type RegisterStep3Form = {
  agreePrivacy: boolean;
  agreeRules: boolean;
};

export const RegisterStep3: React.FC<RegisterStepProps<RegisterStep3Form>> = ({ onNext }) => {
  const { register, handleSubmit, resetField } = useForm<RegisterStep3Form>();
  const [isCheckedRules, setIsCheckedRules] = useState<boolean>(false);

  return (
    <AuthForm
      onSubmit={handleSubmit(
        (values) => onNext?.(values),
        (errors) => {
          if (errors.agreePrivacy?.message) return toast.warn(errors.agreePrivacy.message);
          else if (errors.agreeRules?.message) return toast.warn(errors.agreeRules.message);
        }
      )}
    >
      <AuthForm.Row>
        <Checkbox
          {...register("agreePrivacy", {
            required: "개인정보처리방침에 동의하지 않는 경우 한세톤에 참여할 수 없어요",
          })}
        >
          <span>
            <AuthForm.Link href="/docs/privacy" target="_blank">
              개인정보처리방침
            </AuthForm.Link>
            에 동의합니다
          </span>
        </Checkbox>
      </AuthForm.Row>
      <AuthForm.Row>
        <Checkbox
          {...register("agreeRules", {
            required: "한세톤 운영 규칙 및 부정행위를 확인해주세요",
            onChange: () => {
              if (!isCheckedRules) {
                resetField("agreeRules");
                return toast.warn("한세톤 운영 규칙 및 부정행위를 확인해주세요");
              }
            },
          })}
        >
          <span>
            <AuthForm.Link
              href="/docs/rules"
              target="_blank"
              onClick={() => setIsCheckedRules(true)}
            >
              한세톤 운영 규칙 및 부정행위
            </AuthForm.Link>
            를 확인하였습니다
          </span>
        </Checkbox>
      </AuthForm.Row>

      <AuthForm.Row style={{ marginTop: "auto" }}>
        <Button type="submit" size="large" fillWidth>
          회원가입
        </Button>
      </AuthForm.Row>
    </AuthForm>
  );
};
