import { useState } from 'react';
import './App.css';
import Button from './button/button';
import ButtonLong from './button/buttonLong';

function App() {
  
  const [variable, setVariable] = useState("0");
  const [variable1, setVariable1] = useState("");
  const [variable2, setVariable2] = useState("");

  return (
      <div className='container'>
        <div className='sub_container'>
          <div className='screen_calculator'>
            {variable}
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="AC" color="#c8d1dc" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable,setVariable1)} title="( )" color="#c8d1dc" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable,setVariable1)} title="%" color="#c8d1dc" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable,setVariable1)} title="/" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="7" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="8" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="9" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable,setVariable1)} title="X" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="4" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="5" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="6" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable,setVariable1)} title="-" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="1" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="2" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="3" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable,setVariable1)} title="+" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <ButtonLong clickSelect={(e) => handleClick(e,variable,setVariable)} title="0" color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="," color="#393d41" />
            <Button clickSelect={(e) => handleClick(e,variable,setVariable)} title="=" color="#ea930f" colorText="white"/>
          </div>
        </div>
      </div>
  );
}

function handleClick(e, variable,setVariable,setVariable1) {
  switch (e.target.id) {
    case '0':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '1':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '2':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '3':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '4':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '5':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '6':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '7':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '8':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case '9':
      if(variable === "0"){
        setVariable(e.target.id)
      } else {
        setVariable([...variable, e.target.id])
      }
      break;
    case 'AC':
      setVariable("0");
      break;
    case '( )':
    case '%':
    case '/':
      setVariable1(variable);
      setVariable("");
      break;
    case 'X':
      setVariable1(variable);
      setVariable("");
      break;
    case '-':
      setVariable1(variable);
      setVariable("");
      break;
    case '+':
      setVariable1(variable);
      setVariable("");
      break;
    case ',':
      setVariable([...variable, e.target.id])
      break;
    case '=':
  }
}

export default App;
