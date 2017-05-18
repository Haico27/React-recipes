import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'
import toggleLikeAction from '../actions/recipes/toggle-like'
import './RecipeItem.sass'

export class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    toggleLikeAction: PropTypes.func.isRequired,
  }

toggleLike() {
  const { _id } = this.props
  console.log('CLICK (RecipeItem)', _id)
  this.props.toggleLikeAction(_id)
}

  render() {
    const { _id, title, photo, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
      <article className="recipe">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
          <h1>
            <Link to={`/recipes/${_id}`}>{ title }</Link>
          </h1>
          <ul>
            { vegan && <li title="vegan"><img src={Vegan} /></li> }
            { !vegan && vegetarian && <li title="vegetarian"><img src={Vegetarian} /></li> }
            { pescatarian && <li title="pescatarian"><img src={Pescatarian} /></li> }
          </ul>
        </header>
        <main>
          <p>{ summary }</p>
        </main>
        <footer>
          <LikeButton
            liked={ liked }
            _id={ _id }
            onChange={ this.toggleLike.bind(this) } />
        </footer>
      </article>
    )
  }
}

export default connect(null, {toggleLikeAction})(RecipeItem)
