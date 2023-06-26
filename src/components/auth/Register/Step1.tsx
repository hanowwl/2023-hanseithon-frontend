import React from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "src/components/common";
import { PASSWORD_REGEX } from "src/constants";

import { AuthForm } from "../AuthForm";

import { RegisterStepProps } from ".";

export type RegisterStep1Form = {
  email: string;
  password: string;
  passwordVerify: string;
};

export const RegisterStep1: React.FC<RegisterStepProps<RegisterStep1Form>> = ({ onNext }) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterStep1Form>();
  const [password] = watch(["password"]);

  return (
    <AuthForm onSubmit={handleSubmit((values) => onNext?.(values))}>
      <AuthForm.Row>
        <Input
          type="email"
          label="이메일"
          error={Boolean(errors.email?.message)}
          message={errors.email?.message}
          {...register("email", { required: "올바른 이메일을 입력해주세요" })}
        />
      </AuthForm.Row>
      <AuthForm.Row>
        <Input
          type="password"
          label="비밀번호"
          error={Boolean(errors.password?.message)}
          message={errors.password?.message}
          {...register("password", {
            required: "올바른 비밀번호를 입력해주세요",
            pattern: {
              value: PASSWORD_REGEX,
              message: "최소 8자, 숫자와 특수기호를 조합해주세요",
            },
          })}
        />
      </AuthForm.Row>
      <AuthForm.Row>
        <Input
          type="password"
          label="비밀번호 확인"
          error={Boolean(errors.passwordVerify?.message)}
          message={errors.passwordVerify?.message}
          {...register("passwordVerify", {
            required: "올바른 비밀번호를 입력해주세요",
            validate: (value) => (value === password ? true : "비밀번호가 일치하지 않아요"),
          })}
        />
      </AuthForm.Row>

      <AuthForm.Row style={{ marginTop: "auto" }}>
        <Button type="submit" size="large" fillWidth>
          다음
        </Button>
      </AuthForm.Row>
    </AuthForm>
  );
};
