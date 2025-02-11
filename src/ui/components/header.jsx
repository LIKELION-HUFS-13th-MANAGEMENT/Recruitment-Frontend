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
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const syncToken = () => {
        const updatedToken = localStorage.getItem("access_token");
        setToken(updatedToken);
        setIsAdmin(updatedToken === ADMIN_TOKEN);
    };

    useEffect(() => {
        syncToken();

        const checkSubmissionStatus = () => {
            const appId = localStorage.getItem("applicationId");
            console.log("[Header] applicationId:", appId);
            setIsSubmitted(!!appId); 
        };
    
        checkSubmissionStatus();
    
        const handleStorageChange = (event) => {
            if (event.key === "access_token" || event.key === "applicationId") {
                console.log("Storage changed:", event.key);
                syncToken();
                setIsSubmitted(!!localStorage.getItem("applicationId"));
            }
        };
    
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('applicationSubmitted', checkSubmissionStatus);
        window.addEventListener('login', syncToken); 
        window.addEventListener('logout', syncToken); 
    
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('applicationSubmitted', checkSubmissionStatus);
            window.removeEventListener('login', syncToken);
            window.removeEventListener('logout', syncToken);
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
        navigate(`/login`);
        const checkLogin = setInterval(() => {
            const updatedToken = localStorage.getItem("access_token");
            if (updatedToken) {
                clearInterval(checkLogin); 
                setToken(updatedToken);
                setIsAdmin(updatedToken === ADMIN_TOKEN);
            }
        }, 100); 
    };
    
    const handleLogoutClick = () => {
        handleLogout(token, () => {
            localStorage.removeItem("access_token");
            setToken(null);
            setIsAdmin(false);
            window.dispatchEvent(new Event('logout'));
        });
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
            <H.ButtonLogin onClick={() => {
                if (token) {
                    handleLogoutClick();
                } else {
                    handleLogin();
                }
            }}>
                {token ? "로그아웃" : "로그인"}
            </H.ButtonLogin>
                <H.ButtonWrite onClick={handleWriteOrList}>
                    {isAdmin ? "지원서 조회하기" : isSubmitted ? "지원서 수정하기" : "지원서 작성하기"}
                </H.ButtonWrite>
                <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
            </H.MenuContainer>
            {isMenuOpen && (
                <H.MenuPopupMobile>
                    <H.MenuContent> 
                    <H.ButtonLogin onClick={() => {
                        if (token) {
                            handleLogoutClick();
                        } else {
                            handleLogin();
                        }
                    }}>
                        {token ? "로그아웃" : "로그인"}
                    </H.ButtonLogin>
                        <H.ButtonWrite onClick={handleWriteOrList}>{isAdmin ? "지원서 조회하기" : isSubmitted ? "지원서 수정하기" : "지원서 작성하기"}</H.ButtonWrite>
                        <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
                    </H.MenuContent>
                </H.MenuPopupMobile>
            )}
        </H.Container>
    );
};

export default Header;
