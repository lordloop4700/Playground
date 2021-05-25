import {React, useState, useEffect} from 'react';
import './App.css';

var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0]; //state값
  var setNumber = numberState[1];

  // var dateState = useState(new Date().toString());
  // var _date = dateState[0]; //state값
  // var setDate = dateState[1];

  var [_date, setDate] = useState((new Date()).toString());

  useEffect(function(){
    console.log('%cfunc => (componentDidMount & componentDidUpdate) ' + (++funcId) ,funcStyle)
  })

  console.log('%cfunc => render ' + (++funcId) ,funcStyle)

  return(
    <div class="container">
      <h2>규따이 도착시간</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="현재시간" onClick={
        function(){
          setNumber(Math.random);
          setDate(new Date().toString());
        }
      }></input>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <FuncComp initNumber={2}></FuncComp>
    </div>
  );
}

export default App;
