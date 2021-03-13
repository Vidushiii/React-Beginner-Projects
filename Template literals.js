import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var date = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();

ReactDOM.render(
  <><h1>Dynamic Date and Time !!!</h1>
    {`Today's Date is  ${date} and Time is ${time}`}
  </>, document.getElementById('root')
);

//We rendered local and dynamic date an time using built-in functions and usend template literals to show everything together without wasting momery.