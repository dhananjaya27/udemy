
import './App.css';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';
import TodoListContextProvider from './context/TodoListContext';
import Navbar from './cpmponents/Navbar';
import TodoList from './cpmponents/TodoList';

function App() {
  return (
    <div className="App">
          <h1>hello</h1>
          <div className='ui raised very padded text container segment'>
          <AuthContextProvider>
          <ThemeContextProvider>
            <TodoListContextProvider>
          <Navbar/>
          <TodoList/>
          </TodoListContextProvider>
          </ThemeContextProvider>
          </AuthContextProvider>
          
         </div>
         
    </div>
  );
}

export default App;
