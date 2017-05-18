import API from '../../middleware/api'
import loading from '../loading' //imports the action loading.js
import loadError from '../load/load-error' //imports the action load/load-error


export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return fetchRecipes
}

const fetchRecipes = (dispatch) => {
  dispatch(loading(true))

  recipes.find()
    .then((response) => {

      dispatch({
        type: FETCHED_RECIPES,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
}

/*export default () => {
  return (dispatch) => {
    console.log('Fetching recipes...')
    recipes.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchRecipes(result))
      })
  }
}*/


//this is the action that our recipes reducer will act on. This function will be
//dispatched by the default function above, but only after it received data from the API
/*const fetchRecipes = (result) => {
  console.log('dispatching fetchedRecipes')
  return {
    type: FETCHED_RECIPES,
    payload: [].concat(result.data)
  }
}*/
