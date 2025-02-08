import React from 'react';
import { useNavigate } from "react-router-dom";
import * as H from '../styles/headerStyles';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <H.Container>
            <H.Logo src={Logo} alt="로고" />
            <H.MenuContainer>
                <H.ButtonLogin>로그인</H.ButtonLogin>
                <H.ButtonWrite>지원서 작성하기</H.ButtonWrite>
                <H.ButtonHome>HOME</H.ButtonHome>
            </H.MenuContainer>
        </H.Container>
    );
};

export default Header;
