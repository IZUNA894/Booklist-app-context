import React , {Component,createContext,useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
const [books,setBooks] = useState([
    {id:1,name:"Lost soul"},
    {id:2,name:"Last symbol"},
    {id:3,name:"Brigth sunshine"}
]);
const addBooks = (book)=>{
    setBooks([ ...books,{id:Math.random(),name:book}]);
}
return(
    <BookContext.Provider value={{ books,addBooks}}>
        {props.children}
    </BookContext.Provider>
)
}

export default BookContextProvider
