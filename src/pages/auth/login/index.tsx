import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { AuthForm } from "src/components/auth";
import { Button, Input } from "src/components/common";

type LoginForm = {
  email: string;
  password: string;
};

export default function AuthLoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();

  return (
    <AuthForm.Layout name="로그인" description="한세톤에 오신 것을 환영해요!">
      <AuthForm
        onSubmit={handleSubmit(({ email, password }) => {
          toast.success(
            <>
              {email}
              <br />
              {password}
            </>
          );
        })}
      >
        <AuthForm.Row>
          <Input label="이메일" {...register("email")} />
        </AuthForm.Row>

        <AuthForm.Row>
          <Input label="패스워드" {...register("password")} />
        </AuthForm.Row>

        <AuthForm.Row style={{ marginTop: "auto" }}>
          <Button size="large" fillWidth>
            로그인
          </Button>
        </AuthForm.Row>
      </AuthForm>
    </AuthForm.Layout>
  );
}
