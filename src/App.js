import React from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'



class App extends React.Component {
  updateRecipe(id, update) {
    this.setState(this.state.recipes.map(function(recipe) {
      if (recipe._id === id) {
        recipe.liked = update
      }
    }))
  }

  render() {
    return (
      <div className="app">
        <RecipesContainer updateRecipe={this.updateRecipe.bind(this)}/>
      </div>
    )
  }
}

export default App
