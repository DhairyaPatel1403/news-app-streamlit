import React, {useRef, useState, useEffect } from 'react'
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

import './style.css';
import Card from "./Card";



const Second: React.FC<ComponentProps> = (props) => {

  const [country, setCountry] = useState('');
  const [newsNumber, setNewsNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;

    switch (name) {
      case 'country':
        setCountry(value);
        break;
      case 'non':
        setNewsNumber(value);
        break;
      case 'search':
        setSearch(value);
        break;
      default:
        break;
    }
  };

  const { name } = props.args;


  useEffect(() => {
    console.log('Country:', country);
    console.log('Number of News:', newsNumber);
    console.log('Search:', search);
  }, [country, newsNumber, search]);


  return (
    <div className='second'>
     <nav>
      <div className='nav-logo'><div className='headli'>{name}</div></div>

      <div className='nav-items'>
          <div className='item'>Country</div>      
          <input
            id='country'
            name='country'
            value={country}
            onChange={handleInputChange}
          />
          <div className='item'>Number of News</div>
          <input
            className='number-inp'
            type='number'
            id='non'
            name='non'
            value={newsNumber}
            onChange={handleInputChange}
          />
          <div className='item'>Search</div>
          <input
            id='search'
            name='search'
            value={search}
            onChange={handleInputChange}
          />
        </div>

    </nav>

    <div className='card-container'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>


    </div>
  )


}

export default Second
