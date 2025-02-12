import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = async (token, setIsLogout) => {
    try {
      const response = await axios.post(
        'https://woodzverse.pythonanywhere.com/member/logout/',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      localStorage.removeItem('access_token');
      window.dispatchEvent(new Event('storage'));
      alert("로그아웃을 성공하였습니다")
      setIsLogout(true);
      localStorage.removeItem('submittedFormData');
      localStorage.removeItem('applicationId')
      navigate("/")
    } catch (error) {
      console.log(error);
      console.log(token);
    }
  };

  return {
    handleLogout,
  };
};
