import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import * as serviceWorker from './serviceWorker';
import { HeadBar } from './components/HeadBar/HeadBar';
import { HomePage } from './components/HomePage/HomePage';
import { About } from './components/About/About';
import MenuPage from './components/MenuPage/MenuPage';

const routing = (

  <div>
    <HeadBar />
      <HomePage />
      <MenuPage />
      <About />

  </div>

)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
