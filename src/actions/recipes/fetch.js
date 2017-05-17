import API from '../../middleware/api'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return (dispatch) => {
    console.log('Fetching recipes...')
    recipes.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchedRecipes(result))
      })
  }
}


//this is the action that our recipes reducer will act on. This function will be
//dispatched by the default function above, but only after it received data from the API
const fetchedRecipes = (result) => {
  console.log('dispatching fetchedRecipes')
  return {
    type: FETCHED_RECIPES,
    payload: [].concat(result.data)
  }
}
