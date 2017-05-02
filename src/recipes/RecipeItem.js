import React, { PureComponent } from 'react'

class RecipeItem extends PureComponent {
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
