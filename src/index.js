import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pa0 from './components/Pa0.js';
import Navbar from './components/Navbar.js';
import KeyGenerator from './components/KeyGenerator.js';
import ImageEncrypt from './components/ImageEncrypt.js';
import ImageOp from './components/ImageOp.js';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

const data = [
  {
    name: 'A', freq: 2400,fre2 :2222
  },
  {
    name: 'B', freq: 5000,fre2 : 2300
  }
];
ReactDOM.render(
  <Router>
      <div>
        <Navbar/>
          <Switch>

            <Route path="/encrypt-image" exact component={ImageEncrypt}/>
            <Route path="/encrypt-image-operation" exact component={ImageOp}/>
            <Route path="/key-generator" exact component={KeyGenerator}/>

          </Switch>
      </div>
    </Router>
  ,document.getElementById('root')
);
