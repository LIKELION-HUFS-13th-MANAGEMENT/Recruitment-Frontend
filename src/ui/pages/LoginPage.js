import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../logic/hooks/useLogin';
import * as L from '../styles/LoginPageStyled';

function LoginPage() {
  const { handleLogin } = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 이메일:', email);
    console.log('입력된 비밀번호:', password);

    // 입력 검증
    if (!email) return alert('이메일을 입력해주세요.');
    if (!password) return alert('비밀번호를 입력해주세요.');
    handleLogin(email, password); // 훅에서 로그인 요청 처리
  };

  return (
    <L.LoginBody>
      <L.LoginContent>
        <L.LoginTitle>로그인</L.LoginTitle>
        <L.SubText>
          아직 계정이 없으신가요?{' '}
          <L.SignupLink onClick={() => navigate('/signup')}>
            Sign Up
          </L.SignupLink>
        </L.SubText>
        <L.Form onSubmit={handleSubmit}>
          <L.Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <L.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <L.LoginBtn type="submit">로그인</L.LoginBtn>
        </L.Form>
      </L.LoginContent>
    </L.LoginBody>
  );
}

export default LoginPage;
