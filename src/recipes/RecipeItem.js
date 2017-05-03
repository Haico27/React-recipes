import React, { PureComponent, PropTypes } from 'react'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'
import './RecipeItem.sass'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  toggleLike() {
    const { _id, liked } = this.props
    console.log('CLICK (RecipeItem)', _id)
    this.props.onChange( _id, { liked: !liked })
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
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
            onChange={ this.toggleLike.bind(this) } />
        </div>
      </article>
    )
  }
}

export default RecipeItem
