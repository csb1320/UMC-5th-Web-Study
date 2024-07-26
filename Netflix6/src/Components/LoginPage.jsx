import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const LoginButtonStyle = styled.button`
        border : 1px solid white;
        padding : 5px 15px 5px 15px;
        border-radius : 20px;
        color :  #0C356A;
        background-color : white;
        margin-right : 10px
    `;

const LoginPage = () => {
    return (
        <Link to="/login">
            <LoginButtonStyle>
                로그인
            </LoginButtonStyle>
        </Link>
    )
}

export default LoginPage;