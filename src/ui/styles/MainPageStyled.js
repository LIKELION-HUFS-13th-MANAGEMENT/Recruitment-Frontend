import styled from 'styled-components';
import backgroundImg from '../../assets/images/background_img.png';

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #212224;
  display: flex;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 65vh 60vh;
  background-position: 85% center;
  font-family: 'Pretendard';
`;

export const Content = styled.div`
  text-align: left;
  max-width: 600px;
  margin-top: 8%;
  margin-left: 5%;
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 48px;
  font-weight: 800;
  margin: 0px;
`;

export const SignupBtn = styled.button`
  background-color: #ed802f;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 29px;
  margin-top: 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: 0.3s;
  &:hover {
    background-color: #e66a1a;
  }
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`;

export const ArrowImg = styled.img`
  width: 100%;
  height: 100%;
`;
