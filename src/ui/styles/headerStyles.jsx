import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    position: relative;
`;

export const MenuIcon = styled.img`
    display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
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

    @media (max-width: 768px) {
        display: none; 
    }
`;

export const MenuPopupMobile = styled.div` 
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        top: 40px;
        right: 0;
        width: 90%; 
        background-color: white;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; 
        z-index: 1000;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px; 
    }
`;

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
`;

export const ButtonLogin = styled.div`
    cursor: pointer;
    font-weight: bold;
    margin: 10px 0; 

    @media (max-width: 768px) {
        font-size: 18px; 
    }
`;

export const ButtonWrite = styled.div`
    cursor: pointer;
    font-weight: bold;
    margin: 10px 0; 

    @media (max-width: 768px) {
        font-size: 18px; 
    }
`;

export const ButtonHome = styled.div`
    cursor: pointer;
    font-weight: bold;
    margin: 10px 0; 

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
