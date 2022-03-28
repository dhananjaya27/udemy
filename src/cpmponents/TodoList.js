// import React, { Component } from 'react'
// import '../App.css'
// import { ThemeContext } from '../context/ThemeContext';
//  class TodoList extends Component {


//     static contextType=ThemeContext;
//     render() {
//         const{isDarkTheme,darkTheme,LightTheme,changeTheme}=this.context;
//         const theme=isDarkTheme?darkTheme:LightTheme
//         return (
//             <div className='ui list' style={{background:theme.background,color:theme.text,height:'140px',textAlign:'center'}}>
//                 <p className='item'>plan the family</p>
//                 <p className='item'>go for shopping</p>
//                 <p className='item'>go for a walk</p>
//                 <button className='ui red button' onClick={changeTheme}>change the theme</button>
//             </div>
//         )
//     }
// }
// export default TodoList;

import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { TodoListContext } from '../context/TodoListContext';

function TodoList() {
    const[todo,setTodo]=useState('')
 const{todos,dispatch}  = useContext(TodoListContext)
    const{isDarkTheme,darkTheme,LightTheme,changeTheme}= useContext(ThemeContext)
    const theme=isDarkTheme?darkTheme:LightTheme;

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_TODO',text:todo})
    }

    const handleRemoveTodo=(e)=>{
         const id=e.target.id
         dispatch({type:'REMOVE_TODO',id})
    }

  return (
    <div className='ui list' style={{background:theme.background,color:theme.text,textAlign:'center'}}>
        {todos.length ? (
            todos.map((todo)=>{
                return(
                    <p id={ todo.id} key={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
                )
            })
        ):(
            <div>you have no todos</div>
        )
        }
        <form onSubmit={handleFormSubmit}>
           <label htmlFor='todo'>Add todo:</label>
               <input type='text' id='todo' onChange={handleChange}/>
               <input type='submit' value='add new todo' className='ui button primary'/>
           
        </form>
         <button className='ui red button' onClick={changeTheme}>change the theme</button>
                </div>
  )
}

export default TodoList