import styled from 'styled-components';

export const LoginBody = styled.div`
  background-color: #f2f4f6;
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const LoginContent = styled.div`
  width: 369px;
`;

export const LoginTitle = styled.div`
  font-size: 34px;
  font-weight: 900;
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

export const SignupLink = styled.span`
  color: #ed802f;
  font-weight: 600;
  cursor: pointer;
  text-decoration-line: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  color: #212224;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
`;

export const Input = styled.input`
  display: flex;
  width: 369px;
  padding: 18px;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  background: #fff;
  border: none;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
  color: #a3a3a3;
`;

export const LoginBtn = styled.button`
  width: 369px;
  border: none;
  padding: 18px;
  margin-top: 70px;
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
`;
