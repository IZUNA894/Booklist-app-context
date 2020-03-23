import React, { Component } from 'react'
import Navbar from "./components/navbar";
import Bookmarks from "./components/bookmarks";
import ThemeContextProvider from "./context/themeContext.js";
import ToggleButton from "./components/toggleButton";
import ToggleButtonAuth from "./components/toggleButtonAuth";
import AuthContextProvider from "./context/authContext.js";
import BookContextProvider from "./context/bookContext.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar/>
        <BookContextProvider>
          <Bookmarks/>
        </BookContextProvider>
        <ToggleButton/>
        <ToggleButtonAuth/>
      </AuthContextProvider>
      </ThemeContextProvider>
      </div>
    )
  }
}

