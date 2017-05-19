import API from '../../middleware/api'
import loading from '../loading'
import loadError from '../load/load-error'
import loadSuccess from '../load/load-success'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate(user)
    .then((response) => {
      
      dispatch(loadSuccess())
      dispatch({
        type: USER_SIGNED_IN,
        payload: response

      })
      history.push('/')
      console.log("Logged in successfully!")
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
