import React from 'react'
import { styled } from 'styled-components'
import MarginVertical from './MarginVertical'

const SignupDropDown = ({grade, setGrade, setShowDropDown, emptyArray}) => {
  const gradeText = [1, 2, 3, 4];
  var currentGrade = "";

  return (
    <>
    <DropDownBody>
      {gradeText.map((el, index) => {
        return(
        <MenuEl key={index} onClick={() => {
          setGrade(el);
          currentGrade = el
          setShowDropDown(false);
          if(currentGrade > 0){
            emptyArray[5] = false;
            
          }else{
            emptyArray[5] = true
          }
          }}>
          <MenuText>{`${el}학년`}</MenuText>
        </MenuEl>
        )
      })}
    </DropDownBody>
    <MarginVertical margin={24}/>
    </>
    
  )
}

export default SignupDropDown


const DropDownBody = styled.div`
  background-color:#fff;
  height:100px;
  border-radius:14px;
  overflow:scroll;
  padding:10px 20px;
  box-sizing:border-box;

  width: 100%;  // 부모 크기에 맞게 설정
  max-width: 369px;

  @media (max-width: 369px) {
    width: 90vw;
  }

`

const MenuEl = styled.div`
  width:100%;
  height:30px;
  box-sizing:border-box;
  
`

const MenuText = styled.p`
  font-size:15px;
  font-weight:700;

  &:hover{
    color:#ED802F;
  }
`