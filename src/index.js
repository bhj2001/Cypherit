import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pa0 from './components/Pa0.js';
import Pa1 from './components/Pa1.js';
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
            <Route path="Cypherit/practical-assignment-0" exact component={Pa0}/>
            <Route path="/practical-assignment-1" exact component={Pa1}/>

          </Switch>
      </div>
    </Router>
  ,document.getElementById('root')
);
