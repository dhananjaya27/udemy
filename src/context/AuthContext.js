// import React, { Component, createContext } from 'react'



  




// export const AuthContext=createContext();

//  class AuthContextProvider extends Component {
//     state={
//         isLoggedIn:false
//     }
//     changeAuthStatus=()=>{
//         this.setState({isLoggedIn:!this.state.isLoggedIn})
//     }
//     render() {
//         return (
//             <div>
//                 <AuthContext.Provider value={{...this.state,changeAuthStatus:this.changeAuthStatus}}>
//                     {this.props.children}
//                 </AuthContext.Provider>
//             </div>
//         )
//     }
// }
// export default AuthContextProvider;

import { useState,createContext } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}){
 const[isLoggedIn,setisLoggedIn]=   useState(false)

 const changeAuthStatus=()=>{
            setisLoggedIn(!isLoggedIn)
        }
    return(
        <AuthContext.Provider value={{isLoggedIn,changeAuthStatus}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;