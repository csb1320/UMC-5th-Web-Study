import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const LoginPageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LoginBox = styled.form`
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
`;

const LoginP = styled.p`
    font-size: 1vw;
    display: flex;
`;

const LoginButton = styled.button`
    margin-top: 2vw;
`;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const navigate = useNavigate();

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordCheck = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])(?!.*\s).{8,}$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    
        if (!emailCheck.test(e.target.value)) {
            setEmailError("올바른 이메일을 입력해주세요.");
        } else {
            setEmailError("올바른 이메일입니다.");
        }
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    
        if (!passwordCheck.test(e.target.value)) {
            setPasswordError("올바른 비밀번호를 입력해주세요.");
        } else {
            setPasswordError("올바른 비밀번호입니다.");
        }
    }

    const isLoginButtonEnabled = emailerror.includes("올바른") && passworderror.includes("올바른");
    
    const handleLogin = () => {
        if (isLoginButtonEnabled) {
            navigate("/");
        }
    };

  return (
    <LoginPageContainer>
      <LoginBox>
        <h2>이메일과 비밀번호를 입력해주세요</h2>
        <LoginP>이메일 주소</LoginP>
        <input type="text" placeholder="이메일을 입력해주세요." style={{ fontSize: "1vw", width: "100%", height: "2vw" }} value={email} onChange={handleEmailChange} />
            {emailerror && (
                <LoginP style={{ color: emailerror.includes("올바른") ? "green" : "red", marginTop: "0.5vw" }}>
                    {emailerror}
                </LoginP>
            )}
        <LoginP>비밀번호</LoginP>
        <input type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" style={{ fontSize: "1vw", width: "100%", height: "2vw" }} value={password} onChange={handlePasswordChange} />
            {passworderror && (
                <LoginP style={{ color: passworderror.includes("올바른") ? "green" : "red", marginTop: "0.5vw" }}>
                {passworderror}
                </LoginP>
            )}
        <LoginButton type="button" onClick={handleLogin} disabled={!isLoginButtonEnabled}>
          Login
        </LoginButton>
      </LoginBox>
    </LoginPageContainer>
  );
};

export default LoginPage;