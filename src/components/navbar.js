import React, { Component,useContext } from 'react'
import {ThemeContext} from "../context/themeContext.js";
import {AuthContext} from "../context/authContext.js";

// export default class Navbar extends Component {
//     //static contextType = ThemeContext;

//     render() {
        

//         return (
//             <AuthContext.Consumer>{(authContext)=>(
//             <ThemeContext.Consumer>{(themeContext)=>{
                
//             }}
//             </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
            
//         )
//     }
// }

const Navbar =()=>{
    var {isAuthentiacated} = useContext(AuthContext);
    var {isLightTheme,light ,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light:dark;
    return(
        
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Context-app</h1>
                <h2 >{isAuthentiacated ? 'Logged In' : 'Not Logged In' }</h2>
                <ul>
                    <li>Coffee</li>
                    <li>Milk</li>
                    <li>Sugar</li>
                    <li>Tea</li>

                </ul>
            </nav>
        
    )
}

export default Navbar
