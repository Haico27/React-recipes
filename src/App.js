import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'



class App extends React.Component {


  render() {
    return (
      <div className="app">
        <RecipesContainer />
      </div>
    )
  }
}

export default App
