import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import Title from '../components/Title'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'

export class RecipePage extends PureComponent {
  static propTypes = {}

  //connect the fetchRecipes action to our component's props and call it from componentDidMount
  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    const { title, photo, vegan, vegetarian, pescatarian, cookingTime, ingredients, cookingSteps, authorId  } = this.props

    return(
      <div className="recipe page">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
          <h1>
            <Title content={ title } />
          </h1>
          <ul>
            { vegan && <li title="vegan"><img src={Vegan} /></li> }
            { !vegan && vegetarian && <li title="vegetarian"><img src={Vegetarian} /></li> }
            { pescatarian && <li title="pescatarian"><img src={Pescatarian} /></li> }
          </ul>
          <h2>{ cookingTime }</h2>
        </header>
        <main>
          <div className="ingredients">
            <p>{ ingredients }</p>
          </div>
          <div className="cooking steps">
            <p>{ cookingSteps }</p>
          </div>
        </main>
        <footer>
          <p>This recipe is created by `${authorId}`</p>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { params }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipePage)
