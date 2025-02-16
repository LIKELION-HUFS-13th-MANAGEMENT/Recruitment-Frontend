import axios from 'axios'
import { useCallback } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const navigate = useNavigate();
  const handleSignup = useCallback(
    async (email, password, password2, name, studentId, grade, phoneNum, major, doubleMajor) => {
      try {
        const response = await axios.post('https://woodzverse.pythonanywhere.com/member/signup/', {
          email: email,
          password1: password,
          password2: password2,
          fullname: name,
          student_number: Number(studentId),
          grade: Number(grade),  
          phone: phoneNum,
          major_1: major,
          major_2: doubleMajor
        })
        alert("회원가입을 성공하였습니다")
        navigate('/');
        
      } catch (error) {
        alert("회원가입을 실패하였습니다")
      }
    }, []
  )

  return { handleSignup }
}
