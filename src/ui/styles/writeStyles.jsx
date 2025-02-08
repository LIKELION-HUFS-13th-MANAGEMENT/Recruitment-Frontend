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

export const One = styled.div`
    margin-bottom: 5%;
`;

export const OTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const OContent = styled.div`
`;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 100%;
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

export const Two = styled.div`
    margin-bottom: 5%;
`;

export const TwTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const TwContent = styled.div``;

export const Three = styled.div`
    margin-bottom: 5%;
`;

export const ThTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const ThContent = styled.div``;

export const Four = styled.div`
    margin-bottom: 5%;
`;

export const FoTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const FoContent = styled.div``;

export const Five = styled.div`
    margin-bottom: 5%;
`;

export const FiTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const FiContent = styled.div``;

export const Six = styled.div`
    margin-bottom: 5%;
`;

export const STitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const SContent = styled.div``;

export const Seven = styled.div`
    margin-bottom: 5%;
`;

export const SeTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
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


export const SeContent = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    margin-left: -1.5%;
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

export const Eight = styled.div``;

export const ETitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1%;
`;

export const EContent = styled.div``;

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