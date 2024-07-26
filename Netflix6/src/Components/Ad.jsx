import React,{ useState } from 'react'
import image from '../img/ad.svg'
import styled from "styled-components";

const Ad = ({ showAd }) => {
    if (!showAd) {
      return null;
    }
  
    return (
      <img src={image} alt="ad" style={{width: "100%"}}/>
    );
  };
  
  export default Ad;