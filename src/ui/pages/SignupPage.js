import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MarginVertical from '../components/MarginVertical';
import { useNavigate } from 'react-router-dom';

import dropdown_icon from '../../assets/images/dropdown_icon.png';
import SignupDropDown from '../components/SignupDropDown';
import { useSignup } from '../../logic/hooks/useSignup';
import { Link } from 'react-router-dom';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const SignupPage = () => {
  const navigate = useNavigate();
  const categoryText = [
    '이메일',
    '비밀번호',
    '비밀번호 확인',
    '성명',
    '학번',
    '학년',
    '휴대폰 번호',
    '본 전공',
    '이중 전공',
  ];
  const [showDropDown, setShowDropDown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [major, setMajor] = useState('');
  const [doubleMajor, setDoubleMajor] = useState('');
  const [grade, setGrade] = useState('');
  const [isModal, setIsModal] = useState(false);
  const categoryValue = [
    email,
    password,
    password2,
    name,
    studentId,
    grade,
    phoneNum,
    major,
    doubleMajor,
  ];
  const categorySetter = [
    setEmail,
    setPassword,
    setPassword2,
    setName,
    setStudentId,
    setGrade,
    setPhoneNum,
    setMajor,
    setDoubleMajor,
  ];
  const [emptyArray, setEmptyArray] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [isChecked, setIsChecked] = useState(false);

  const { handleSignup } = useSignup();

  useEffect(() => {
    console.log(handleSignup);
  }, []);

  const handleChange = (e, index) => {
    console.log(e.target.value);
    categorySetter[index](e.target.value);
    if (e.target.value.length > 0) {
      emptyArray[index] = false;
    } else {
      emptyArray[index] = true;
    }
    console.log(emptyArray);
    console.log(emptyArray.indexOf(false));
  };

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  const PrivacyModal = () => {
    return(
      <ModalBody>
        <ModalText>
          [개인정보 수집·이용 동의서]
        </ModalText>
        <ModalText>
          주식회사 멋쟁이 사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보보호 규정을 준수하여 「25년 멋쟁이사자처럼 13기 모집」 참가자의 개인정보 및 권익을 보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.
        </ModalText>
        <ModalText>
          가. 개인 정보의 수집· 이용에 관한 사항
        </ModalText>
        <ModalText>
          {`개인 정보의 수집· 이용 목적
개인 정보는 1차적으로 본 프로그램 참가신청, 참가신청에 따른 본인확인, 개인식별, 프로그램 진행, 프로그램 관련 안내/고지사항 등의 전달, 문의사항 또는 불만사항 등의 확인 및 처리, 분쟁 조정을 위한 기록 보존 등을 위해 사용됩니다. 이후 멋쟁이사자처럼의 프로그램 및 브랜드 홍보를 위한 마케팅에 활용될 수 있습니다.
 수집하는 개인 정보의 항목
성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
개인 정보의 보유· 이용기간
개인 정보는 원칙적으로 개인 정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 본 사업 종료 후 참여 인정 문서 발급을 위한 최소한의 자료(성명, 전화번호, 이메일)는 사업종료 이후 5년간 보존됩니다.
동의를 거부할 권리 및 동의를 거부할 경우의 불이익
위 개인 정보의 수집· 이용에 거부할 권리가 있음을 알려드립니다. 단, 수집항목은 사업 진행을 위한 최소한의 필수 정보로서 개인 정보 수집· 이용에 동의하지 않으실 경우 프로그램 참가 및 제반 활동이 불가능합니다.`}
        </ModalText>
        <ModalText>
        나. 개인 정보 제3자 제공에 관한 사항
        </ModalText>
        <ModalText>
        {`
제공받는 자
주식회사 멋쟁이사자처럼
제공받는 자의 목적
‘25년 멋쟁이사자처럼 13기 모집’ 진행 및 운영, 참가자 관리, 마케팅 활용
제공하는 개인 정보 항목
성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
동의를 거부할 권리 및 동의를 거부할 경우의 불이익
위 제3자에 대한 개인 정보의 제공에 관한 동의를 거부할 수 있으나 본 프로그램 참가를 위해 필수적이므로 위 사항에 동의하셔야만 참가 및 활동이 가능합니다.`}
        
        </ModalText>
        <CloseButton onClick={() => setIsModal(false)}>확인</CloseButton>
      </ModalBody>
    )
  }

  return (
    <SignupBody>
      <SignupInner style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <SignupInfoArea>
          <MarginVertical margin={124}/>
          <SignupTitle>회원가입</SignupTitle>
          <MarginVertical margin={16}/>
          <GotoLoginArea>
            <SignupText>이미 계정이 있으신가요?</SignupText>
            <Link to={"/login"}>
              <GotoLoginText>Log In</GotoLoginText>
            </Link>
          </GotoLoginArea>
          <MarginVertical margin={38}/>
        </SignupInfoArea>
        <SignupContentsBody>
          {categoryText.map((el, index) => {


            return(
              index === 5 ?
              <>
              <SignupEl key={index}>
                <SignupCategory>{el}</SignupCategory>
                <MarginVertical margin={8}/>
                <GradeInputBody>
                  <SignupInput placeholder={`${el}을 선택해주세요`} value={grade}/>
                  <DropDownIcon onClick={() => setShowDropDown(prev => !prev)}>
                    <DropDownIconImg src={dropdown_icon}/>
                  </DropDownIcon>
                </GradeInputBody>
                <MarginVertical margin={showDropDown ? 10 : 24}/>
              </SignupEl>
              {showDropDown ? (
                <SignupDropDown
                  grade={grade}
                  setGrade={setGrade}
                  setShowDropDown={setShowDropDown}
                  emptyArray={emptyArray}
                />
              ) : (
                <></>
              )}
            </>
          : 
            <>
              <SignupEl key={index}>
                <SignupCategory>{el}</SignupCategory>
                <MarginVertical margin={8} />
                <SignupInput
                  type={index === 1 || index === 2 ? 'password' : 'text'}
                  placeholder={
                    index === 1 
                      ? `알파벳, 숫자 포함 8글자 이상`
                      : index === 2
                      ? `비밀번호를 다시 입력해주세요`
                      : index === 4
                      ? 'ex)20XXXXXXX'
                      : index === 6
                      ? 'ex)010-0000-0000'
                      :
                      `${el}을 입력해주세요`
                  }
                  value={categoryValue[index]}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />

                {password !== password2 && index === 2 ? (
                  <>
                    <MarginVertical margin={10} />
                    <DifferentPW>비밀번호가 일치하지 않습니다</DifferentPW>
                  </>
                ) : (
                  <></>
                )}
              </SignupEl>
              <MarginVertical margin={24} />
            </>
          )}
          )}
      </SignupContentsBody>
      <MarginVertical margin={36} />
      <SignupCheckBoxArea>
        <CheckBox
          type="checkbox"
          value={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <div style={{display:'flex'}}>
          <CheckBoxText onClick={() => setIsModal(prev => !prev)}>개인정보 수집 및 이용</CheckBoxText>
          <div style={{fontSize: 14,fontWeight: 600,color: "#6e6e6e"}}>에 동의합니다</div>
        </div>
      {isModal ? <PrivacyModal/> : <></>}
      </SignupCheckBoxArea>
      <MarginVertical margin={40} />
      {emptyArray.includes(true) ? (
        <>
          <DifferentPW>입력하지 않은 칸이 존재합니다</DifferentPW>
          <MarginVertical margin={10} />
        </>
      ) : (
        <></>
      )}
      <SignupButton
        onClick={() => {
          emptyArray.includes(true)
            ? console.log('empty')
            : handleSignup(
                email,
                password,
                password2,
                name,
                studentId,
                grade,
                phoneNum,
                major,
                doubleMajor
              );
        }}
        style={{
          backgroundColor:
            !emptyArray.includes(true) && isChecked ? '' : 'gray',
          marginTop:isModal ? 100 : 0
        }}
        >가입하기</SignupButton>
        <MarginVertical margin={100}/>
        </SignupInner>
    </SignupBody>
  );
};

export default SignupPage;

const SignupBody = styled.div`
  background-color:#F2F4F6;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
  box-sizing:border-box;


`

const SignupInner = styled.div`
  width: 100%;
  max-width: 389px;  // 최대 너비 설정
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 369px) {
    width: 90vw; // 화면이 작아질 때 가변적으로 조정
  }
`;


const SignupInfoArea = styled.div`
  width:100%;

  @media(max-width:369px){
    width:90vw;
  }
 
`

const SignupTitle = styled.div`
  font-size: 34px;
  font-weight: 800;
  color: #212224;
`;

const GotoLoginArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

const SignupText = styled.div`
  color: #212224;
  font-size: 16px;
  font-weight: 500;
`;

const GotoLoginText = styled.div`
  color: #ed802f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`;

const SignupContentsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 중앙 정렬 유지
  width: 100%;
  max-width: 369px;

  @media (max-width: 369px) {
    width: 90vw;
  }
`;

const SignupEl = styled.div`
  width: 100%;  // 부모 크기에 맞게 설정
  max-width: 369px;

  @media (max-width: 369px) {
    width: 90vw;
  }
`;

const SignupCategory = styled.div`
  color: #212224;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

const SignupInput = styled.input`
  display: flex;
  width: 369px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  background: #FFF;
  border:none;
  box-sizing:border-box;
  font-weight:700;
  font-size:15px;
  
  @media (max-width:380px){
    width:90vw;
  }
`

const SignupCheckBoxArea = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  gap:5px;
  width: 100%;
  max-width: 369px;
  @media (max-width: 369px) {
    width: 90vw;
  }
`

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`;

const CheckBoxText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #6e6e6e;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
  display:flex;
  text-decoration:underline;
  text-decoration-thickness: 1.3px;

  text-underline-position : under;

  justify-content:center;
  &:hover{
    color:#ED802F;
  }

`;

const SignupButton = styled.button`
  width: 100%;
  border: none;
  padding: 18px;
  border-radius: 14px;
  background:#ED802F;
  color:#fff;
  font-size:18px;
  font-weight:800;
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;

  @media(max-width:369px){
    width:90vw;
  }
`

const DropDownIcon = styled.button`
  border: none;
  background: none;
  z-index: 9;
  position:absolute;
  right:10px;
  
`;

const DropDownIconImg = styled.img`
  z-index: 9;
`;

const DifferentPW = styled.div`
  color:#ED802F;
  font-weight:700;
`

const GradeInputBody = styled.div`
  width: 100%;  // 부모 크기에 맞게 설정
  max-width: 369px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width: 369px) {
    width: 90vw;
  }
`

const ModalBody = styled.div`
  width:100%;
  height:300px;
  background-color:#fff;
  display:flex;
  align-items:center;
  position:absolute;
  border-radius:10px;
  padding:20px;
  box-sizing:border-box;
  overflow:scroll;
  flex-direction:column;
`

const ModalText = styled.div`
  color:#212224;
  font-weight:500;
  font-size:14px;
  line-height:22px;
  margin-bottom:10px;
`

const CloseButton = styled.button`
  border:none;
  background:none;
  font-weight:600;
  color:#4c4c4c;
  margin-top:10px;

  &:hover{
    color:#ED802F;
  }
`