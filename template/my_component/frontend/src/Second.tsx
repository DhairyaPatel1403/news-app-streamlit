import React from 'react'
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

import './style.css';
import Card from "./Card";



const Second: React.FC<ComponentProps> = (props) => {

  const { name } = props.args;


  return (
    <div className='second'>
     <nav>
      <div className='nav-logo'><div className='headli'>{name}</div></div>

      <div className='nav-items'>
          <div className='item'>Country</div><input id="country" name="country"></input>
          <div className='item'>Number of News</div><input className='number-inp' type='number' id="non" name="non"></input>
          <div className='item'>Search</div><input id="search" name="search"></input>
        </div>

    </nav>

     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>

    </div>
  )


}

export default Second
