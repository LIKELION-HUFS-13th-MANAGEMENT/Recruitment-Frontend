import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '../styles/MainPageStyled';
import arrow_icon from '../../assets/images/arrow_icon.png';

function MainPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('access_token')
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('access_token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <M.PageContainer>
      <M.Body>
        <M.Content>
          <M.SubTitle>HUFS SEOUL</M.SubTitle>
          <M.Title>멋쟁이사자처럼</M.Title>
          <M.Title>13기</M.Title>
          <M.SignupBtn
            onClick={() => navigate(isLoggedIn ? `/write` : '/signup')}
          >
            {isLoggedIn ? '지원서 작성하기' : '회원가입'}
            <M.ArrowIcon>
              <M.ArrowImg src={arrow_icon} alt="화살표 아이콘" />
            </M.ArrowIcon>
          </M.SignupBtn>
        </M.Content>
      </M.Body>
    </M.PageContainer>
  );
}

export default MainPage;
