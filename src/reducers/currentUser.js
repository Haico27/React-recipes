import { USER_SIGNED_IN } from '../actions/user/sign-in'

const CURRENT_USER_KEY = 'recipes.currentUser'

//const initialState = JSON.parse(localStorage.getItem(CURRENT_USER_KEY))

export default ( state = null, { type, payload } ) => {
  console.log("this is the state", state)
  switch(type) {
    case USER_SIGNED_IN:
      const currentUser = Object.assign({}, payload)
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
      console.log("this is the localStorage", localStorage)
      console.log("this is the currentUser", currentUser)
      return currentUser

    default:
      return state
  }
}
