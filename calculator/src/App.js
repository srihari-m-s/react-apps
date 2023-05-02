import React, {useReducer} from 'react';
import './App.css'


const ACTIONS={
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  OPERATION: 'operation',
  CALCULATE: 'calculate'
}

function reducer(state, {type, payload}){

  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(state.overwrite){
        return {
          ...state,
          current: payload,
          overwrite: false
        }
      }
      if(payload === "0" && state.current === "0"){ 
        return state
      }
      if(payload === "." && state.current.includes(".")){ 
        return state
      }
      
      return {
        ...state, 
        current: `${state.current || ""}${payload}`,
      }
    case ACTIONS.CLEAR:
      return {
        ...state,
        current: 0,
        previous: null,
        operation: null
      }
    case ACTIONS.OPERATION:
      if(state.current == null && state.previous == null){
        return state;
      }

      if(state.previous == null){
        return {
          ...state,
          previous: state.current,
          operation: payload,
          current: null
        }
      }

      if(state.current == null && payload !== "-"){
        return{
          ...state,
          operation: payload
        }
      } else if(state.current == null && payload === "-"){
        return{
          ...state,
          current: `${state.current || ""}${payload}`
        }
      } else if(state.current === "-"){
        return{
          ...state,
          operation: payload,
          current: null
        }
      }

      return{
        ...state,
        previous: calculate(state),
        operation: payload,
        current: null
      }
    case ACTIONS.CALCULATE:
      if(state.current == null || state.previous == null || state.operation == null){
        return state
      }
      return{
        ...state,
        overwrite: true,
        current: calculate(state),
        previous: null,
        operation: null
      }
    default:
      return state;
  }
}

function calculate({current, previous, operation}){
  const prev = parseFloat(previous);
  const curr = parseFloat(current);

  if(isNaN(curr) || isNaN(prev)){
    return ""
  }

  let ans = ""
  switch(operation){
    case "+":
      ans = prev+curr;
      break;
    case "-":
      ans = prev-curr;
      break;
    case "*":
      ans = prev*curr;
      break;
    case "/":
      ans = prev/curr;
      break;
    default:
      ans=""
  }

  return ans.toString();
}

function App() {

  const [{ current, previous, operation },dispatch] = useReducer(reducer, {})


  return (
    <div className="App">

      <div className="calc-container">
        <div className="display">
          <div className='previous'>{previous} {operation}</div>
          <div className="current"  id="display">{current}</div>
        </div>

        <button id="clear" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
        <button id="divide" onClick={() => dispatch({type: ACTIONS.OPERATION, payload: "/"})}>/</button>
        <button id="multiply" onClick={() => dispatch({type: ACTIONS.OPERATION, payload: "*"})}>x</button>

        <button id="seven" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "7"})}>7</button>
        <button id="eight" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "8"})}>8</button>
        <button id="nine" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "9"})}>9</button>
        <button id="subtract" onClick={() => dispatch({type: ACTIONS.OPERATION, payload: "-"})}>-</button>

        <button id="four" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "4"})}>4</button>
        <button id="five" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "5"})}>5</button>
        <button id="six" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "6"})}>6</button>
        <button id="add" onClick={() => dispatch({type: ACTIONS.OPERATION, payload: "+"})}>+</button>

        <button id="one" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "1"})}>1</button>
        <button id="two" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "2"})}>2</button>
        <button id="three" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "3"})}>3</button>

        <button id="equals" onClick={() => dispatch({type: ACTIONS.CALCULATE})}>=</button>
        <button id="zero" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "0"})}>0</button>
        <button id="decimal" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "."})}>.</button>
        

      </div>
      
    </div>
  );
}

export default App;