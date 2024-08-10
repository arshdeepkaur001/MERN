import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './functions/Counter';
import FullName from './functions/FullName';
import Combobox from './functions/Combobox';
import CheckBox from './functions/Checkbox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter></Counter>
    <FullName></FullName>
    <Combobox></Combobox>
    <CheckBox></CheckBox>
  </React.StrictMode>
);
