import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Link from "next/link";
import { useRouter } from "next/router";

import { setInstanceAccessToken } from "src/apis";
import { AuthForm } from "src/components/auth";
import { Button, Input } from "src/components/common";
import { useLoginMutation } from "src/hooks";

type LoginForm = {
  email: string;
  password: string;
};

export default function AuthLoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const loginMutation = useLoginMutation();

  const handleOnSubmit: SubmitHandler<LoginForm> = (formValues) => {
    loginMutation.mutate(formValues, {
      onSuccess: ({ result: { accessToken } }) => {
        setInstanceAccessToken(accessToken);
        router.push("/");
      },
      onError: ({ response }) => {
        toast.error(response?.data.message);
      },
    });
  };

  return (
    <AuthForm.Layout name="로그인" description="한세톤에 오신 것을 환영해요!">
      <AuthForm onSubmit={handleSubmit(handleOnSubmit)}>
        <AuthForm.Row>
          <Input
            type="email"
            label="이메일"
            message={errors.email?.message}
            error={Boolean(errors.email?.message)}
            {...register("email", { required: "올바른 이메일을 입력해주세요" })}
          />
        </AuthForm.Row>

        <AuthForm.Row>
          <Input
            type="password"
            label="비밀번호"
            message={errors.password?.message}
            error={Boolean(errors.password?.message)}
            {...register("password", { required: "올바른 비밀번호를 입력해주세요" })}
          />
        </AuthForm.Row>

        <AuthForm.Row style={{ marginTop: "auto", flexDirection: "column", gap: "0.8rem" }}>
          <Button size="large" fillWidth disabled={loginMutation.isLoading}>
            {loginMutation.isLoading ? "처리 중이에요" : "로그인"}
          </Button>

          <Link href="/auth/register" style={{ textDecoration: "none" }}>
            <AuthForm.PrevButton type="button" size="large" fillWidth>
              또는 계정 만들기
            </AuthForm.PrevButton>
          </Link>
        </AuthForm.Row>
      </AuthForm>
    </AuthForm.Layout>
  );
}
