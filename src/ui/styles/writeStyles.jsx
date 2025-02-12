import { styled } from "styled-components";

export const Container = styled.div`
    padding: 50px 200px;
    background-color: #F2F4F6;

    @media (max-width: 768px) {
        padding: 20px 15px; 
    }
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 5%;

    @media (max-width: 768px) {
        font-size: 22px; 
        text-align: center;
    }
`;

export const TitleContent = styled.div``;

export const Content = styled.div``;

export const Section = styled.div`
    margin-bottom: 5%;
`;

export const SectionTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
    margin-bottom: 5%;
`;

export const SectionContent = styled.div``;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 150px;
    margin-top: 2%;
    padding: 15px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    resize: none;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 768px) {
        font-size: 14px; 
        padding: 10px;   
    }
`;

export const Track = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    margin-left: -4%;
    margin-bottom: 5%;

    @media (max-width: 768px) {
        flex-direction: column; 
        gap: 15px;
    }
`;

export const Choice = styled.label`
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 8px 12px;
    cursor: pointer;
    gap: 6px;
    transition: background-color 0.3s, color 0.3s;

    @media (max-width: 768px) {
        font-size: 16px; 
    }
`;

export const ChoiceInput = styled.input`
    width: 20px;
    height: 20px;
    accent-color: #007bff;
    cursor: pointer;
    &:focus {
        outline: none; 
    }
    &:checked {
        outline: none; 
    }

    @media (max-width: 768px) {
        width: 18px;
        height: 18px;
    }
`;

export const Button = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 50%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`;

export const ReButton = styled.button`
    background-color: #212224;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #585858;
    }

    @media (max-width: 768px) {
        width: 90%;
        font-size: 14px;
    }
`;

export const FnButton = styled.button`
    background-color: #ed802f;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ee9756;
    }

    @media (max-width: 768px) {
        width: 90%;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    background-color: #ed802f;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ea924f;
    }

    @media (max-width: 768px) {
        width: 90%;
        font-size: 14px;
    }
`;

export const ChoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

export const ChoiceTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DropdownContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const DropdownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const DropdownIcon = styled.img`
    width: 12px;
    height: 12px;
    margin-left: 10px;
`;

export const DropdownList = styled.ul`
    position: absolute;
    width: 100%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 5px 0 0 0;
    padding: 0;
    list-style: none;
    z-index: 10;
`;

export const DropdownItem = styled.li`
    padding: 12px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #f9f9f9;
    }
`;
