import { useState } from 'react';
import './App.css';
import Button from './button/button';
import ButtonLong from './button/buttonLong';

function App() {
  const [cal, setCal] = useState("");
  const [variable, setVariable] = useState("");
  const [numOld, setNumOld] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  return (
      <div className='container'>
        <div className='sub_container'>
          <div className='screen_calculator'>
            <div className='calculator'>
              {cal}
            </div>
            <div className='result'>
              {result}
            </div>
          </div>
          <div>
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="AC" color="#c8d1dc" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="( )" color="#c8d1dc" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="%" color="#c8d1dc" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="/" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="7" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="8" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="9" color="#393d41" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="x" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="4" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="5" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="6" color="#393d41" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="-" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="1" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="2" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="3" color="#393d41" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="+" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <ButtonLong clickSelect={(e) => handleClick(e,variable, setVariable,cal, setCal)} title="0" color="#393d41" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="," color="#393d41" />
            <Button clickSelect={(e) => operatorHandle(e,variable,setVariable,cal, setCal,operator, setOperator,numOld,setNumOld,setResult)} title="=" color="#ea930f" colorText="white"/>
          </div>
        </div>
      </div>
  );
}

function handleClick(e,variable, setVariable,cal, setCal) {
    setVariable(variable + e.target.value)
    setCal(cal + e.target.value)
}

function operatorHandle(e,variable,setVariable,cal, setCal,operator,setOperator,numOld,setNumOld,setResult) {
  switch (e.target.value) {
    case 'AC':
      setVariable("");
      setCal("");
      setNumOld("");
      setOperator("");
      setResult("")
      break;
    case '%':
      setCal(variable + e.target.value)
      setNumOld(variable);
      setOperator(e.target.value)
      setVariable("");
      break;
    case '/':
      setCal(variable + e.target.value)
      setNumOld(variable);
      setOperator(e.target.value)
      setVariable("");
      break;
    case 'x':
      setCal(variable + e.target.value)
      setNumOld(variable);
      setOperator(e.target.value)
      setVariable("");
      break;
    case '-':
      setCal(variable + e.target.value)
      setNumOld(variable);
      setOperator(e.target.value)
      setVariable("");
      break;
    case '+':
      setCal(variable + e.target.value)
      setNumOld(variable);
      setOperator(e.target.value)
      setVariable("");
      break;
    case '=':
      if(operator === "%") {
        setResult(numOld % variable)
      } else if(operator === "/") {
        setResult(numOld / variable)
      } else if(operator === "x") {
        setResult(numOld * variable)
      } else if(operator === "-") {
        setResult(numOld - variable)
      } else if(operator === "+") {
        setResult(parseInt(numOld) + parseInt(variable) )
      }
  }
} 

export default App;
