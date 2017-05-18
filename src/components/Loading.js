import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoadingIcon from '../images/Loading_icon.gif'
import './Loading.sass'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired //loading refers to the reducer loading.js and is accessed by the { connect }-import from react-redux, which connects this component to the store.
  }

  render() {
    const { loading } = this.props

    if ( !loading ) return null

    return(
      <div className= "loading">
        <img src= { LoadingIcon } />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading }) //refers to the reducer loading.js

export default connect(mapStateToProps)(Loading)
