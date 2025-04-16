
import {React} from 'react'
import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import Home from './Components/Home';

function App(){
  return(
    <Home />
  )
}








export default App;

// function App() {

//   const [count, setCount] = useState(0);
//   const [inputt, setInputt] = useState("");

//   const handleInc = () => {
//     setCount(count + 1);
//   }

//   const handleDec = () => {
//     setCount(count - 1);
//   }

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setInputt(e.target.value);
//   }
  
//   return (
//     <>
   
//     <div className="testing">
//       Hi this is my first application in react
//     </div>
//     <div>
//      The value of count is {count}
//     </div>
//     <button onClick={handleInc}>Increment</button>
//     <div>
//       <button onClick={handleDec}>Decrement</button>
//     </div>
//     <div>
//       <input type="text"  onChange={handleChange}/>
//     </div>
//     <div>
//       The updated value is {inputt}
//     </div>
//     </>
//   );
// }


