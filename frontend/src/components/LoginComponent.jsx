// LoginComponent.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setId, setPw, setLoading, setError, setUserInfo } from '../redux/store';
import axios from 'axios';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // 빈 값 체크
    if (!email || !password) {
      alert('이메일과 비밀번호를 모두 입력하세요.');
      return;
    }

    // 로딩 시작
    dispatch(setLoading(true));

    const url = 'http://localhost:8000/user/login';

    try {
      const response = await axios.post(url, { id: email, pw: password });

      // 로그인 성공
      dispatch(setUserInfo(response.data));
      alert('로그인 성공하였습니다.');
    } catch (error) {
      // 로그인 실패
      if (error.response && error.response.status === 404) {
        dispatch(setError('아이디 또는 비밀번호가 일치하지 않습니다'));
        alert('아이디 또는 비밀번호가 일치하지 않습니다');
      } else {
        dispatch(setError('입력값이 없습니다.'));
        alert('입력값이 없습니다.');
      }
    } finally {
      // 로딩 종료
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginComponent;
