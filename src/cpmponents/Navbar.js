




// import React, { Component } from 'react'

// import { ThemeContext } from '../context/ThemeContext';


// import { AuthContext } from '../context/AuthContext';
//  class Navbar extends Component {
//      static contextType=ThemeContext;

//     render() {
//         // const{isDarkTheme,darkTheme,LightTheme}=this.context;
//         // const theme=isDarkTheme?darkTheme:LightTheme
//         return (
//             <AuthContext.Consumer>
//                 {(authcontext)=>{
//                     return(
//                         <ThemeContext.Consumer>
                
//                         { (context)=>{
//                                const{isDarkTheme,darkTheme,LightTheme}=context;
//                                const theme=isDarkTheme?darkTheme:LightTheme;
//                                const{isLoggedIn,changeAuthStatus}=authcontext
//                                return(
//                                   <nav style={{background:theme.background,color:theme.text,height:'120px'}}>
//                                   <h2 className='ui centered header' style={{textAlign:'center'}}>
//                                       project
//                                    </h2> 
//                                    <p onClick={changeAuthStatus}>
//                                        {isLoggedIn?'loggedIn':'loggedout'}
//                                    </p>
//                                    <div className='ui three buttons'>
//                                       <button className='ui button'>overview</button>
//                                       <button className='ui button'>contact</button>
//                                       <button className='ui button'>support</button>
//                                    </div>
//                                </nav>
          
//                                )
//                           }
//                       }
//                       </ThemeContext.Consumer>
                   
//                     )
//                 }}
//             </AuthContext.Consumer>

//         )
//     }
// }
// export default  Navbar;
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
    const{isDarkTheme,darkTheme,LightTheme} = useContext(ThemeContext)
    const{isLoggedIn,changeAuthStatus}=useContext(AuthContext)
    const theme=isDarkTheme?darkTheme:LightTheme
  return (
    <nav style={{background:theme.background,color:theme.text,height:'120px'}}>
                                   <h2 className='ui centered header' style={{textAlign:'center'}}>
                                       project
                                    </h2> 
                                    <p onClick={changeAuthStatus}>
                                        {isLoggedIn?'loggedIn':'loggedout'}
                                    </p>
                                    <div className='ui three buttons'>
                                       <button className='ui button'>overview</button>
                                       <button className='ui button'>contact</button>
                                       <button className='ui button'>support</button>
                                    </div>
                                </nav>
          
  )
}

export default Navbar