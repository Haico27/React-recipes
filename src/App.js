import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'



class App extends React.Component {


  render() {
    return (
      <div className="app">
        <RecipesContainer />
        <Loading />
        <LoadError />
      </div>
    )
  }
}

export default App
