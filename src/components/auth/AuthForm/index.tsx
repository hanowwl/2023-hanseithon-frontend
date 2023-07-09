import * as S from "./styled";

export interface AuthFormLayoutProps {
  name: string;
  description: string;
  children?: React.ReactNode;
}

const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({ name, description, children }) => {
  return (
    <S.AuthFormLayoutContainer>
      <S.AuthFormLayoutInnerContainer>
        <S.AuthFormLayoutTitle>{name}</S.AuthFormLayoutTitle>
        <S.AuthFormLayoutDescription>{description}</S.AuthFormLayoutDescription>

        {children}
      </S.AuthFormLayoutInnerContainer>
    </S.AuthFormLayoutContainer>
  );
};

export const AuthForm = Object.assign(S.AuthForm, {
  Row: S.AuthFormRow,
  Col: S.AuthFormCol,
  Link: S.AuthLink,
  PrevButton: S.AuthPrevButton,

  Layout: AuthFormLayout,
});
