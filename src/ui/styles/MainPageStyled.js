import styled from 'styled-components';
import backgroundImg from '../../assets/images/background_img.png';

export const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px - 84px);
  background-color: #212224;
  display: flex;
  flex-grow: 1; // 남은 공간을 자동으로 채움

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 65vh 60vh;
  background-position: 85% center;
  font-family: 'Pretendard';

  // 모바일 반응형
  @media (max-width: 768px) {
    background-size: 45vh 40vh;
    background-position: 15% 70%;
  }
`;

export const Content = styled.div`
  text-align: left;
  max-width: 600px;
  margin-top: 3%;
  margin-left: 5%;

  @media (max-width: 768px) {
    margin: 10% 7%;
    max-width: 90%;
  }
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 65px;
  font-weight: 800;
  margin-top: 2px;
  margin-bottom: 9px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SignupBtn = styled.button`
  background-color: #ed802f;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 29px;
  margin-top: 28px;
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

  @media (max-width: 768px) {
    font-size: 18px;
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
