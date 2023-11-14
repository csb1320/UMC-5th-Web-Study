import React from 'react';
import { Link } from 'react-router-dom';
import LoginControl from './LoginControl';
import LoginPage from './LoginPage';
import styled from "styled-components";

export const HeaderStyle = styled.div`
    list-style : none;
    width : 100%;
    background-color : #0C356A;
    display : flex;
    justify-content : flex-start;
    margin : 0px;
    `;
export const ListStyle = styled.li`
    margin : 15px;
    color: white;
    font-size : 15px;
`;

function Header() {
    return (
        <header style={{padding:'0px'}}>
        <HeaderStyle>
            <Link to="/" > <ListStyle><img
                style={{ width: "130px", height: "20px" }}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="로고"/></ListStyle></Link>
            <Link to="/movie" style={{textDecoration : 'none'}}><ListStyle>영화</ListStyle></Link>
            <Link to="/TV" style={{textDecoration : 'none'}}><ListStyle>TV프로그램</ListStyle></Link>
            <Link to="/celebirity" style={{textDecoration : 'none'}}><ListStyle>인물</ListStyle></Link>
            <ListStyle><LoginPage/></ListStyle>
        </HeaderStyle>
        </header>
    )
} 

export default Header;