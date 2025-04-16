import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const TodoList = () => {

    const [items, setItems] = useState("");
    const [value, setValue] = useState([]);
    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        setItems(e.target.value);

    }

    const handleclick = () => {
        setValue([...value, items]);
        setItems("");
    }

    useEffect(() => {
        console.log("Checking");
    },[count])

  return (
    <>
    <div>
        <center><h2>Todo List Items</h2></center>
    </div>
    <div>
        <center>
        <input type='text' placeholder='Enter the list of items todo' onChange={handleChange} value={items}/>
        <Button variant="outline-primary" onClick={handleclick}>Add</Button>
        </center>
    </div>
    <div>
        <center>
            <h2>The list of Items</h2>
        </center>
        <div>
            <center>
           <ul>
            {
               value.map((x, index) => (
                <li className='todoList'>{index} - {x}</li>
               ))
            }
           </ul>
            </center>
        </div>
    </div>
    <div>
        {count}
        <br />
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setCount(count -1)}>Dec</button>
    </div>
    </>
  )
}

export default TodoList