import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

var time = new Date();
time = time.getHours();
let greet = '';
const objstyle = {};

const head = {
  height: "80px",
  width: "400px",
  justifyContent: "centre",
  border: "5px solid white",
  padding: "50px",
  bgColor: "white",
  textAlign: "center"
};

if (time >= 4 && time < 12) {
  greet = "Good Morning !";
  objstyle.color = "pulple";
}
else if (time >= 12 && time <= 5) {
  greet = "Good Afternoon !";
  objstyle.color = "blue";
}
else if (time > 5 && time < 8) {
  greet = "Good Evening !";
  objstyle.color = "green";
}
else {
  greet = "Good Night !"
  objstyle.color = "orange";
}
ReactDOM.render(
  <>
    <div style={head}>
      <h1>Hello there, <span style={objstyle}> {greet} </span></h1>
    </div>
  </>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

