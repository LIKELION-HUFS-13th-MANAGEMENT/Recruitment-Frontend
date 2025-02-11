import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import * as H from '../styles/headerStyles';
import Logo from '../../assets/images/logo.png';
import Logo1 from '../../assets/images/logo1.svg';
import Menu from '../../assets/images/Menu.png';
import Close from '../../assets/images/Close.png';
import { useLogout } from '../../logic/hooks/useLogout';

const ADMIN_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5NjM2MzMwLCJqdGkiOiJhZDEyMzUwMTExMzc0MDUzYTNhOTBhOGUzOWYzNzFkNiIsInVzZXJfaWQiOjF9.3ET-fZUrNZH—nY6as68tL9zCjiKg2w8QTJgTU_8UVg"

const Header = () => {
    const navigate = useNavigate();
    const {handleLogout} = useLogout();
    const [token, setToken] = useState(localStorage.getItem("access_token"));
    const [isLogout, setIsLogout] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem("access_token")); 
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (token === ADMIN_TOKEN) { 
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [token]);

    const handleLogin = () => {
        navigate(`/login`)
    };

    const handleWriteOrList = () => {
        if (isAdmin) {
            navigate(`/appliancelist`); //  관리자 지원서 조회 페이지로 이동
        } else {
            navigate(`/write`); // 일반 유저 지원서 작성 페이지로 이동
        }
    };

    const handleHome = () => {
        navigate(`/`);
    };

    return (
        <H.Container>
            <H.Logo src={Logo1} alt="로고" onClick={handleHome} style={{ cursor: 'pointer' }} />
            <H.MenuIcon src={isMenuOpen ? Close : Menu} alt="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <H.MenuContainer isOpen={isMenuOpen}>
                <H.ButtonLogin onClick={() => {token ? handleLogout(token, setIsLogout) : handleLogin()}}>{token ? "로그아웃" : "로그인"} </H.ButtonLogin>
                <H.ButtonWrite onClick={handleWriteOrList}>
                    {isAdmin ? "지원서 조회하기" : "지원서 작성하기"} 
                </H.ButtonWrite>
                <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
            </H.MenuContainer>
            {isMenuOpen && (
                <H.MenuPopupMobile>
                    <H.MenuContent> 
                        <H.ButtonLogin onClick={() => token ? handleLogout(token, setIsLogout) : handleLogin()}>{token ? "로그아웃" : "로그인"}</H.ButtonLogin>
                        <H.ButtonWrite onClick={handleWriteOrList}>{isAdmin ? "지원서 조회하기" : "지원서 작성하기"}</H.ButtonWrite>
                        <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
                    </H.MenuContent>
                </H.MenuPopupMobile>
            )}
        </H.Container>
    );
};

export default Header;
