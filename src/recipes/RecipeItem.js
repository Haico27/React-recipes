import React, { PureComponent, PropTypes } from 'react'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'
import './RecipeItem.sass'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    updateRecipe: PropTypes.func.isRequired,
  }

  render() {
    const { _id, title, photo, summary, vegan, vegetarian, pescatarian, liked, updateRecipe } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li title="vegan"><img src={Vegan} /></li> }
            { !vegan && vegetarian && <li title="vegetarian"><img src={Vegetarian} /></li> }
            { pescatarian && <li title="pescatarian"><img src={Pescatarian} /></li> }
          </ul>
        </div>
        <div>
          <LikeButton
            liked={ liked }
            _id={ _id }
            onChange={ this.props.updateRecipe.bind(this) } />
        </div>
      </article>
    )
  }
}

export default RecipeItem
