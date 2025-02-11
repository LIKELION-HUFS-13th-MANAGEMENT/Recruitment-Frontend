import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  background-color: #f2f4f6;
  width: 100%;
  min-height: calc(100vh - 84px - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Pretendard';
  flex-grow: 1;

  @media (max-width: 768px) {
    min-height: calc(100vh - 55px - 80px);
  }
`;

export const LoginContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-grow: 1;

  @media (max-width: 369px) {
    width: 90vw;
  }
`;

export const LoginHeader = styled.div`
  width: 369px;
  display: flex;
  flex-direction: column;

  @media (max-width: 369px) {
    width: 90vw;
  }
`;

export const LoginTitle = styled.div`
  font-size: 34px;
  font-weight: 800;
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

export const SignupLink = styled.span`
  color: #ed802f;
  font-weight: 500;
  cursor: pointer;
  text-decoration-line: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  color: #212224;
  line-height: normal;
  margin-top: 40px;

  @media (max-width: 369px) {
    width: 90vw;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 369px;
  padding: 18px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  background: #fff;
  border: none;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 14px;

  ::placeholder {
    color: #a3a3a3;
    font-size: 14px;
  }

  @media (max-width: 369px) {
    width: 90vw;
  }
`;

export const LoginBtn = styled.button`
  width: 369px;
  border: none;
  padding: 18px;
  margin-top: 50px;
  border-radius: 14px;
  background: #ed802f;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 369px) {
    width: 90vw;
  }
`;
