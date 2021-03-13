//import logo from './logo.svg';
//import './App.css';
import Time from './Time';

const head = {
  height: "80px",
  width: "400px",
  justifyContent: "centre",
  border: "5px solid white",
  padding: "50px",
  bgColor: "white",
  textAlign: "center"
};
function App() {
  return (<>
    <div style={head}><h1>Hello there <Time /> </h1></div>

  </>
  );
}

export default App;
