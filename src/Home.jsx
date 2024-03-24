import React from 'react';
import "./App.css"
import { calculateActions, calculateSelectors } from './Redux/calculateReducer'; // Importing actions and selectors from Redux
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux

export default function Home() {
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions
  const { num, result } = useSelector(calculateSelectors); // Using useSelector hook to select state values from Redux store
  const { input, operate, ac, equals, back } = calculateActions; // Destructuring action creators from calculateActions
  
  return (
    <div className="outerDiv">
      <div className='displayDiv'>
        {/* Displaying current input (num) and result */}
        {num} <br/>= {result}
      </div>
      <div className='buttonDiv'>
        {/* Buttons for various calculator operations */}
        <button className='button operate' onClick={() => dispatch(ac())}>AC</button> {/* Dispatches an action to clear input */}
        <button className='button operate' onClick={() => dispatch(back())}><img className='back' src="./arrow.png" alt="back" /></button> {/* Dispatches an action to go back one step */}
        <button className='button operate' onClick={() => dispatch(operate("%"))}>%</button> {/* Dispatches an action to perform percentage operation */}
        <button className='button operate' onClick={() => dispatch(operate("/"))}>/</button> {/* Dispatches an action to perform division */}
        <button className='button operate' onClick={() => dispatch(operate("-"))}>-</button> {/* Dispatches an action to perform subtraction */}
        <button className='button' onClick={() => dispatch(input(6))}>6</button> {/* Dispatches an action to input number 6 */}
        <button className='button' onClick={() => dispatch(input(7))}>7</button> {/* Dispatches an action to input number 7 */}
        <button className='button' onClick={() => dispatch(input(8))}>8</button> {/* Dispatches an action to input number 8 */}
        <button className='button' onClick={() => dispatch(input(9))}>9</button> {/* Dispatches an action to input number 9 */}
        <button className='button operate' onClick={() => dispatch(operate("+"))}>+</button> {/* Dispatches an action to perform addition */}
        <button className='button' onClick={() => dispatch(input(2))}>2</button> {/* Dispatches an action to input number 2 */}
        <button className='button' onClick={() => dispatch(input(3))}>3</button> {/* Dispatches an action to input number 3 */}
        <button className='button' onClick={() => dispatch(input(4))}>4</button> {/* Dispatches an action to input number 4 */}
        <button className='button' onClick={() => dispatch(input(5))}>5</button> {/* Dispatches an action to input number 5 */}
        <button className='button operate' onClick={() => dispatch(operate("x"))}>x</button> {/* Dispatches an action to perform multiplication */}
        <button className='button' onClick={() => dispatch(input(1))}>1</button> {/* Dispatches an action to input number 1 */}
        <button className='button' style={{ width: "230.2px" }} onClick={() => dispatch(input(0))}>0</button> {/* Dispatches an action to input number 0 */}
        <button className='button' onClick={() => dispatch(input("."))}>.</button> {/* Dispatches an action to input decimal point */}
        <button className='button operate' onClick={() => dispatch(equals())}>=</button> {/* Dispatches an action to calculate the result */}
      </div>
    </div>
  )
}
