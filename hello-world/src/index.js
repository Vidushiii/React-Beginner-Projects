import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';


ReactDOM.render(
  <h1>Hello World !!</h1>,
  document.getElementById('root')
);
ReactDOM.render(
  < ><h1>Here, we will have multiple things inside one render function</h1>
    <p>For this we are using fragment function </p>
    <p>In place of writing whole fragment function we can write <></>in above 16 versions of react </p>
  </>, document.getElementById('root')

);


