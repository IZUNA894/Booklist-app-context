import React, { Component,useContext } from 'react'
import {ThemeContext} from "../context/themeContext.js";

// export default class ToggleButton extends Component {
//     static contextType= ThemeContext;
    

//     render() {
        
        
//     }
// }

const ToggleButton =()=>{
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )

}

export default ToggleButton
