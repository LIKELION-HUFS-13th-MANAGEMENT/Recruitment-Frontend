import React from 'react';
import { useNavigate } from "react-router-dom";
import * as H from '../styles/headerStyles';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    const navigate = useNavigate();
    
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
                <H.ButtonLogin onClick={handleLogin}>로그인</H.ButtonLogin>
                <H.ButtonWrite onClick={handleWrite}>지원서 작성하기</H.ButtonWrite>
                <H.ButtonHome onClick={handleHome}>HOME</H.ButtonHome>
            </H.MenuContainer>
        </H.Container>
    );
};

export default Header;
