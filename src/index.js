import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pa0 from './components/Pa0.js';
import Navbar from './components/Navbar.js';
import KeyGenerator from './components/KeyGenerator.js';
import ImageEncrypt from './components/ImageEncrypt.js';


const data = [
  {
    name: 'A', freq: 2400,fre2 :2222
  },
  {
    name: 'B', freq: 5000,fre2 : 2300
  }
];
ReactDOM.render(
  <div>
  <Navbar/>
  <ImageEncrypt/>
  </div>
  ,document.getElementById('root')
);
