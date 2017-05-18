import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

//this.props.children tells our App-component to render what the Router gives us.

class App extends React.Component {


  render() {
    return (
      <div className="app">
        { this.props.children }
        <Loading />
        <LoadError />
      </div>
    )
  }
}

export default App
