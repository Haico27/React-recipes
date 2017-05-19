import { USER_SIGNED_IN } from '../actions/user/sign-in'

const CURRENT_USER_KEY = 'recipes.currentUser'

const initialState = JSON.parse(localStorage.getItem(CURRENT_USER_KEY))

export default ( state = initialState, { type, payload } ) => {

  switch(type) {
    case USER_SIGNED_IN:
      const currentUser = Object.assign({}, payload)
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
      console.log(currentUser)
      return currentUser

    default:
      return state
  }
}
