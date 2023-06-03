import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './style.css'








const MyComponent = () => {

  useEffect(() => Streamlit.setFrameHeight());

  return (
    <div className="main">

    <Navbar/>
    <div className="container">
        <div className="description">
            <p> Description for the website </p>
        </div>


        <div className="buttons">
          <div className="button-container">
          <button className="button1"> Finance </button>
          <button className="button2"> Technology </button>
          </div>
        </div>
    </div>

    <Footer/>


      

    </div>
  );
};

export default MyComponent;