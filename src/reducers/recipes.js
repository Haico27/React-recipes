import { TOGGLE_LIKE } from '../actions/recipes/toggle-like'
import { CREATE_RECIPE } from '../actions/recipes/create'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'

import {
  RECIPE_CREATED,
  RECIPE_UPDATED,
  RECIPE_REMOVED
} from '../actions/recipes/subscribe'



//The reducer is a pure function that takes the previous state and an action, and returns the next state.

export default ( state = [], { type, payload } = {} ) => { //"export" exports the reducer to the store

  switch(type) {
    case FETCHED_RECIPES:
      return [].concat(payload) //we use [].concat(payload) to make sure we return a new array with the API data

    case TOGGLE_LIKE:
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return Object.assign({}, recipe, { liked: !recipe.liked }) //We don't mutate the state; we create a copy with Object.assign(). You MUST supply an empty object as the first parameter.
        }
        return recipe
      })

    case CREATE_RECIPE:
      return [Object.assign({}, payload)].concat(state)

      default:
        return state

    case RECIPE_CREATED :
      const newRecipe = Object.assign({}, payload)
      return [newRecipe].concat(state)

    case RECIPE_UPDATED :
      return state.map((recipe) => {
        if (recipe._id === payload._id) {
          return Object.assign({}, payload)
        }
        return recipe
      })

    case RECIPE_REMOVED :
      return state.filter((filter) => (recipe._id !== payload._id))
  }
}
