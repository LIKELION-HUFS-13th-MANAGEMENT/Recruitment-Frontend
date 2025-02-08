import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
`;

export const Logo = styled.img`
    height: 15px;
    padding: 10px 10px;
`;

export const MenuContainer = styled.div`
    display: flex;
    gap: 35px;
    align-items: center;
    padding: 10px 10px;
`;

export const ButtonLogin = styled.div`
    cursor: pointer;
    font-weight: bold;
`;

export const ButtonWrite = styled.div`
    cursor: pointer;
    font-weight: bold;
`;

export const ButtonHome = styled.div`
    cursor: pointer;
    font-weight: bold;
    margin-top: -1%;
`;
