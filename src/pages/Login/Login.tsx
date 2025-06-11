import { useForm } from "react-hook-form";
import {
  LoginContainer,
  Background,
  Shape,
  LoginForm,
  Title,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
  ResponsiveWrapper,
} from "./LoginStyled";
import type { LoginFormData } from "../../types/api.types";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // 여기에 로그인 로직 추가
  };
  return (
    <ResponsiveWrapper>
      <LoginContainer>
        <Background>
          <Shape />
          <Shape />
        </Background>

        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Smart Store</Title>

          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            placeholder="Email or Phone"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <SubmitButton type="submit">Log In</SubmitButton>

          {/* <SocialContainer>
            <SocialButton>
              <i className="fab fa-google"></i> Google
            </SocialButton>
            <SocialButton className="facebook">
              <i className="fab fa-facebook"></i> Facebook
            </SocialButton>
          </SocialContainer> */}
        </LoginForm>
      </LoginContainer>
    </ResponsiveWrapper>
  );
}
