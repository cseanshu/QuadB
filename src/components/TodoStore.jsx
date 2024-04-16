import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Redux/action';
import { useNavigate } from 'react-router';

function TodoStore() {
    // Load todo list from local storage or use default initial state
    const storedTodoList = JSON.parse(localStorage.getItem('todos')) || [];
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [todolist, settodolist] = useState(storedTodoList)
    useEffect(()=>{
        const newList = JSON.parse(localStorage.getItem('todos'))||[];
        settodolist(newList)
    },[todolist])
    
    return (
        <div>
        <h1 className="text-4xl text-green-600 font-bold text-center shadow-xl py-3 backdrop-blur-md backdrop-filter bg-opacity-50 ">sangrahalaye✨</h1>
        <div className="flex flex-wrap justify-center">
            {todolist.map(todo => (
                <div key={todo.id} className="bg-white bg-opacity-25 backdrop-blur-md py-8 rounded-lg mb-5 px-10 mt-2 mx-5">
                    <p className='text-3xl font-bold'> {todo.title}</p>
                    <p className="text-green-600 font-bold">{todo.text}</p>
                    <div className='mt-4 flex justify-between hover:text-white font-bold'>
                    <input type='checkbox' className='w-6 h-6 mt-2'/>
                    <button className='p-2 bg-red-900 rounded-md' onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="mymedia__query">
        <button onClick={() => navigate('/')} className="p-3 bg-yellow-500 text-2xl font-bold text-white rounded-lg absolute left-1/2 mt-6 px-6"> &lt;&lt;Home</button>
        </div>

    </div>
    );
}

export default TodoStore;
