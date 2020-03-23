import React, { Component,useContext } from 'react'
import {AuthContext} from "../context/authContext.js";

// export default class ToggleButton extends Component {
//     static contextType= AuthContext;
    

//     render() {
        
//     }
// }

const ToggleButton = ()=>{
    const {toggleAuth} = useContext(AuthContext);

    return (
        <div>
            <button onClick={toggleAuth}>Toggle Auth</button>
        </div>
    )
}
export default ToggleButton