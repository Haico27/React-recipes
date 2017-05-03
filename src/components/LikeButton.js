import React, { PureComponent, PropTypes } from 'react'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.sass'

class LikeButton extends PureComponent {
  static propTypes = {
    liked: PropTypes.bool.isRequired, //prop received from the parent, the RecipeItem
    onChange: PropTypes.func.isrequired, //function that is passed down by the parent RecipeItem
  }



// function that toggles the className of the component
  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  // function that toggles the LikeButton
  toggleLike() {
    console.log('CLICK (LikeButton)')
    this.props.onChange()
  }

  render() {
    const { liked } = this.props
    return(
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
