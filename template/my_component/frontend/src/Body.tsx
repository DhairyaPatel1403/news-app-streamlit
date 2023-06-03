import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './style.css';
import { useNavigate } from 'react-router-dom';

const Body = () => {

    const navigate = useNavigate();

    const handlebutton1=()=>{
        navigate('/second');
    }
    const handlebutton2=()=>{
        navigate('/second_');
    }


  return (
    <>
      <div className="container">
        <div className="description">
            <p> Description for the website </p>
        </div>


        <div className="buttons">
          <div className="button-container">
          <button className="button1" onClick={handlebutton1}> Finance </button>
          <button className="button2" onClick={handlebutton2}> Technology </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Body
