import React, { PureComponent, PropTypes } from 'react'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li title="vegan">🌱</li> }
            { !vegan && vegetarian && <li title="vegetarian">🍳</li> }
            { pescatarian && <li title="pescatarian">🐟</li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default RecipeItem
