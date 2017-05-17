import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
//import the fetchRecipe action
import fetchRecipes from '../actions/recipes/fetch'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import RecipeEditor from './RecipeEditor'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
  }

//connect the fetchRecipes action to our component's props and call it from componentDidMount
  componentDidMount() {
    this.props.fetchRecipes()
  }

  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return(

      <div className = "recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          <div className="editor">
            <RecipeEditor title='' />
          </div>
          <div>
            { this.props.recipes.map(this.renderRecipe.bind(this)) }
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes
})

export default connect (mapStateToProps, { fetchRecipes })(RecipesContainer)
