import React, { Component } from 'react'
import Loading from './components/Loading'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'



class App extends React.Component {


  render() {
    return (
      <div className="app">
        <Loading />
        <RecipesContainer />
      </div>
    )
  }
}

export default App
