import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #080710;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;

  &:first-child {
    background: linear-gradient(#1845ad, #23a2f6);
    left: -80px;
    top: -80px;
  }

  &:last-child {
    background: linear-gradient(to right, #ff512f, #f09819);
    right: -30px;
    bottom: -80px;
  }
`;

export const LoginForm = styled.form`
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;

  * {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  transition: background-color 0.3s ease;

  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #e5e5e5;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SocialContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SocialButton = styled.div`
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.47);
  }

  &.facebook {
    margin-left: 15px;

    @media (max-width: 480px) {
      margin-left: 0;
    }
  }

  i {
    margin-right: 4px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 5px;
  display: block;
  font-weight: 400;
`;

// 반응형 스타일을 위한 미디어 쿼리
export const ResponsiveWrapper = styled.div`
  @media (max-width: 480px) {
    ${LoginForm} {
      width: 350px;
      padding: 40px 30px;
    }

    ${Background} {
      width: 350px;
    }
  }
`;
