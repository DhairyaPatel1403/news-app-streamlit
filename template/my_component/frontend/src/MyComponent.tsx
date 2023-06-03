import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";
import './style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Second from "./Second";










const MyComponent = () => {

  useEffect(() => Streamlit.setFrameHeight());

  const props = {
    args: {
      name: 'Finance',
    },
  };
  const props2 = {
    args: {
      name: 'Tehnology',
    },
  };

  return (

    <>
        <Router>
          <Routes>

          <Route path="/" element={
            <div className="main">
              <Navbar/>
              <Body/>
              <Footer/>
            </div>
          } />

    <Route path="/second" element={<><Second width={0} disabled={false} {...props} /></>}/>
    <Route path="/second_" element={<><Second width={0} disabled={false} {...props2} /></>}/>

          </Routes>
        </Router>
    </>






  );
};

export default MyComponent;