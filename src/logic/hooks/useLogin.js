import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://woodzverse.pythonanywhere.com';

const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/member/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('서버 응답 상태 코드:', response.status);

      const data = await response.json();
      console.log('서버 응답 데이터:', data);

      if (!response.ok) {
        const errorMessage = data.error?.[0] || '로그인에 실패했습니다.';

        // 회원가입이 필요할 경우
        if (errorMessage.includes('Invalid email or password')) {
          alert('이메일이 존재하지 않습니다. 회원가입을 진행해주세요.');
          return;
        }

        throw new Error(errorMessage);
      }

      // 토큰 저장
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      // 로그인 성공 시 메인 페이지로 이동
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return { handleLogin };
};

export default useLogin;
