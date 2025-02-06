import axios from 'axios'
import { useCallback } from 'react'

export const useSignup = () => {
  const handleSignup = useCallback(
    async (email, password, password2, name, studentId, grade, phoneNum, major, doubleMajor) => {
      try {
        const response = await axios.post('https://woodzverse.pythonanywhere.com/member/signup/', {
          email: email,
          password1: password,
          password2: password2,
          fullname: name,
          student_number: Number(studentId),
          grade: Number(grade),  // 기존 코드에서 강제적으로 1로 설정된 부분 수정
          phone: phoneNum,
          major_1: major,
          major_2: doubleMajor
        })
        console.log(response.data)
       
        return response.data // 응답 데이터를 반환하는 것이 더 유용할 수도 있음
      } catch (error) {
        console.error('Signup Error:', error.response ? error.response.data : error)
        console.log("grade:",grade)
        console.log("phone:",phoneNum)

      }
    }, []
  )

  return { handleSignup }
}
