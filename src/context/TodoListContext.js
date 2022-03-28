import { createContext, useReducer} from "react";
import { todoReducer } from "../reducers/todoReducer";


export const TodoListContext=createContext();
const TodoListContextProvider=({children})=>{
   const[todos,dispatch]= useReducer(todoReducer,[
        { text: 'plan the family',id:1},
        { text: 'go for shopping',id:2},
         {text: 'go for a walk',id:3}
])
//   const [todos,setTodos]=  useState([
//                   { text: 'plan the family',id:1},
//                   { text: 'go for shopping',id:2},
//                    {text: 'go for a walk',id:3}
//     ])

    // const addTodo=(todo)=>{
    //     setTodos([...todos,
    //             { text:todo,id:Math.random()}
    //         ])
    // }

    // const removeTodo=(id)=>{
    //   setTodos(todos.filter((todo)=>{
    //       return(
    //          todo.id!==Number(id)
    //       )
    //   }))
    // }
    return(
          <TodoListContext.Provider value={{todos,dispatch}}>
                 {children}
          </TodoListContext.Provider>
    )
}
export default TodoListContextProvider;