import React, { Component, createContext } from 'react'




export const ThemeContext=createContext();

 class ThemeContextProvider extends Component {
    state={
        isDarkTheme:true,
        LightTheme:{
            text:'#222',
            background:'#d8ddf1'
        },
        darkTheme:{
            text:'#fff',
            background:'#5c5c5c'
        }
    };
    changeTheme=()=>{
        this.setState({isDarkTheme:!this.state.darkTheme})
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
                  {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default  ThemeContextProvider;