import React, { Component ,useContext} from 'react'
import {ThemeContext} from "../context/themeContext";
import {BookContext} from "../context/bookContext";

// export default class Bookmarks extends Component {
//     static contextType = ThemeContext;

//     render() {
       

//         return (
            
//         )
//     }
// }

const Bookmarks = ()=>{
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const {books,addbooks} = useContext(BookContext);
    const theme= isLightTheme ? light : dark;

    var booksObj = books && books.map((book)=>{
        return(
            <li style= {{background:theme.ui}}>{book.name}</li>
        )
    })
    return(
        <div className ="book-list" style={{color:theme.syntax,background:theme.bg}}>
        
        <ul>
            {booksObj}
        </ul>

        </div>
    )
}
export default Bookmarks