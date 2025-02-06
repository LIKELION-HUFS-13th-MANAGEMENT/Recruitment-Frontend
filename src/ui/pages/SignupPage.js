import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import MarginVertical from '../components/MarginVertical'

import dropdown_icon from '../../assets/images/dropdown_icon.png';
import SignupDropDown from '../components/SignupDropDown';
import { useSignup } from '../../logic/hooks/useSignup';

const SignupPage = () => {
  const categoryText = ["이메일", "비밀번호","비밀번호 확인", "성명", "학번", "학년", "휴대폰 번호", "본 전공", "이중 전공"];
  const [showDropDown, setShowDropDown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [major, setMajor] = useState("");
  const [doubleMajor, setDoubleMajor] = useState("");
  const [grade, setGrade] = useState("");
  const categoryValue = [email, password, password2, name, studentId, grade, phoneNum, major, doubleMajor];
  const categorySetter = [setEmail, setPassword, setPassword2, setName, setStudentId, setGrade, setPhoneNum, setMajor, setDoubleMajor];
  const [emptyArray, setEmptyArray] = useState([true, true, true, true, true, true, true, true, true]);


  const {handleSignup} = useSignup();

  useEffect(() => {
    console.log(handleSignup)
    
  }, [])
  
  const handleChange = (e, index) => {
    console.log(e.target.value);
    categorySetter[index](e.target.value);
    if(e.target.value.length > 0){
      emptyArray[index] = false;
    }else{
      emptyArray[index] = true;
    }
    console.log(emptyArray)
    console.log(emptyArray.indexOf(false))
  }
  

  return (
    <SignupBody>
        <SignupInfoArea>
          <MarginVertical margin={124}/>
          <SignupTitle>회원가입</SignupTitle>
          <MarginVertical margin={16}/>
          <GotoLoginArea>
            <SignupText>이미 계정이 있으신가요?</SignupText>
            <GotoLoginText>Log In</GotoLoginText>
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
                <div style={{width:369, display:'flex'}}>
                  <SignupInput placeholder={`${el}을 선택해주세요`} value={grade}/>
                  <DropDownIcon onClick={() => setShowDropDown(prev => !prev)}>
                    <DropDownIconImg src={dropdown_icon}/>
                  </DropDownIcon>
                </div>
                <MarginVertical margin={showDropDown ? 10 : 24}/>
              </SignupEl>
              {showDropDown ?
              
              <SignupDropDown grade={grade} setGrade={setGrade} setShowDropDown={setShowDropDown} emptyArray={emptyArray}/>
              :
              <></>
              }
              </>
              :
              <>
              <SignupEl key={index}>
                <SignupCategory>{el}</SignupCategory>
                <MarginVertical margin={8}/>
                <SignupInput
                  type={index===1 || index===2 ? 'password' : 'text'}
                  placeholder={index===1 || index===6 ? `${el}를 입력해주세요`: index === 2 ? `비밀번호를 다시 입력해주세요` : `${el}을 입력해주세요`} 
                  value={categoryValue[index]}
                  onChange={(e) => {handleChange(e, index)}}/>
                  
                  {password !== password2 && index===2 ?
                  <>
                  <MarginVertical margin={10}/>
                  <DifferentPW>비밀번호 오류!</DifferentPW> 
                  </>
                  : <></>}
              </SignupEl>
              <MarginVertical margin={24}/>
              
              </>
            )
          })}
        </SignupContentsBody>
        <MarginVertical margin={36}/>
        <SignupCheckBoxArea>
          <CheckBox type='checkbox'/>
          <CheckBoxText>개인정보 수집 및 이용에 동의합니다</CheckBoxText>
        </SignupCheckBoxArea>
        <MarginVertical margin={40}/>
        {emptyArray.includes(true) ?
        <>
        <DifferentPW>입력하지 않은 칸이 존재합니다</DifferentPW>
        <MarginVertical margin={10}/>
        </>
        :<></>}
        <SignupButton
        onClick={() =>{
          emptyArray.includes(true) ?
          console.log("empty")
          :
          handleSignup(email, password, password2, name, studentId, grade, phoneNum, major, doubleMajor)
        }}
        style={{backgroundColor:emptyArray.includes(true) ? "gray" : ""}}
        >가입하기</SignupButton>
        <MarginVertical margin={100}/>

    </SignupBody>
  )
}

export default SignupPage


const SignupBody = styled.div`
  background-color:#F2F4F6;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
`

const SignupInfoArea = styled.div`
  width:369px;
`

const SignupTitle = styled.div`
  font-size:34px;
  font-weight:800;
  color: #212224;
`

const GotoLoginArea = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  gap:5px;
`

const SignupText = styled.div`
  color: #212224;
  font-size: 16px;
  font-weight: 500;
`

const GotoLoginText = styled.div`
  color: #ED802F;
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
`

const SignupContentsBody = styled.div`
  
`

const SignupEl = styled.div`

`

const SignupCategory = styled.div`
  color: #212224;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`

const SignupInput = styled.input`
  display: flex;
  width: 369px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap:10px;
  border-radius: 14px;
  background: #FFF;
  border:none;
  box-sizing:border-box;
  font-weight:700;
  font-size:15px;
  
`

const SignupCheckBoxArea = styled.div`
  display:flex;
  align-items:center;
  width:369px;
  gap:5px;
`

const CheckBox = styled.input`
  width:18px;
  height:18px;
`

const CheckBoxText = styled.div`
  color: #6E6E6E;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const SignupButton = styled.button`
  width:369px;
  border:none;
  padding:18px;
  border-radius: 14px;
  background:#ED802F;
  color:#fff;
  font-size:18px;
  font-weight:800;
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
`

const DropDownIcon = styled.button`
  border:none;
  background:none;
  z-index:9;
  
`

const DropDownIconImg = styled.img`
  z-index:9;
`

const DifferentPW = styled.div`
  color:#ED802F;
  font-weight:700;
`