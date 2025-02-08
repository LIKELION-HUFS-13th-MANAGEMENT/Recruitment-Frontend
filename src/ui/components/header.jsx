import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import * as H from '../styles/headerStyles';
import Logo from '../../assets/images/logo.png';
import { useLogout } from '../../logic/hooks/useLogout';

const Header = () => {
    const navigate = useNavigate();
    const {handleLogout} = useLogout();
    const token = localStorage.getItem("access_token");
    const [isLogout, setIsLogout] = useState(false);
    
    
    const handleLogin = () => {
        navigate(`/login`)
    };

    const handleWrite = () => {
        navigate(`/write`)
    };

    const handleHome = () => {
        navigate(`/`)
    };

    return (
        <H.Container>
            <H.Logo src={Logo} alt="로고" />
            <H.MenuContainer>
                <H.ButtonLogin onClick={() => {token ? handleLogout(token, setIsLogout) : handleLogin()}}>{token ? "로그아웃" : "로그인"} </H.ButtonLogin>
                <H.ButtonWrite onClick={handleWrite}>지원서 작성하기</H.ButtonWrite>
                <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
            </H.MenuContainer>
        </H.Container>
    );
};

export default Header;
