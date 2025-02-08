import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as H from '../styles/headerStyles';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        setIsLoggedIn(!!token); 
    }, []);

    const handleLogin = () => {
        navigate(`/login`);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token'); 
        setIsLoggedIn(false); 
        alert("로그아웃 되었습니다.");
        navigate(`/`); 
    };

    const handleWrite = () => {
        navigate(`/write`);
    };

    const handleHome = () => {
        navigate(`/`);
    };

    return (
        <H.Container>
            <H.Logo src={Logo} alt="로고" onClick={handleHome} style={{ cursor: 'pointer' }} />
            <H.MenuContainer>
                {isLoggedIn ? (
                    <H.ButtonLogin onClick={handleLogout}>로그아웃</H.ButtonLogin> 
                ) : (
                    <H.ButtonLogin onClick={handleLogin}>로그인</H.ButtonLogin>  
                )}
                <H.ButtonWrite onClick={handleWrite}>지원서 작성하기</H.ButtonWrite>
                <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
            </H.MenuContainer>
        </H.Container>
    );
};

export default Header;
