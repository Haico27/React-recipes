import React from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

const recipes = [
  {
    _id: '123',
    title: 'Creamy Vegan Linguine with Wild Mushrooms',
    summary: 'How do we make these noodles so creamy and cheesy without cream or cheese? Click to learn our secrets.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://ghk.h-cdn.co/assets/15/51/980x490/landscape-1450379149-ghk-0116-creamy-vegan-linguine-with-wild-mushrooms.jpg',
    liked: false,
  },
  {
    _id: '124',
    title: 'Ratatouille',
    summary: 'Delicious vegan Ratatouille with a lot of vegetables and a true pleasure for the tongue. Paradise is just 1 hour away.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://cdn.jamieoliver.com/recipe-database/xtra_med/1MEhvvLk4Ry9d4hhidRdAR.jpg',
    liked: false,
  },
  {
    _id: '125',
    title: 'Three Bean Chili with Spring Pesto',
    summary: 'Three types of beans—chickpeas, cannellini, and kidney—ensures this chili is filling and full of protein.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
    photo: 'https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/chili-pesto.jpg?itok=HpdacgjU',
    liked: false,
  },
  {
    _id: '126',
    title: 'Rainbow Vegetarian Pad Thai with Peanuts and Basil',
    summary: 'It is brown rice noodles (because we’re currently doing the sugar free experiment again and loosely avoiding refined grains) and spiralized veggies (because veggies in noodle form feels like more noodles) and a super tangy-delicious Pad Thai sauce that you just shake up in a jar in about five seconds flat, and peanuts that almost instantly start to soak up the sauce, and a gently scrambled egg that kind of cream-ifies the whole thing.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://cdn.pinchofyum.com/wp-content/uploads/Vegetarian-Pad-Tha-2-2.jpg',
    liked: false,
  },
  {
    _id: '127',
    title: 'Grilled Salmon',
    summary: 'A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9 year old loves this recipe!',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
    photo: 'http://images.media-allrecipes.com/userphotos/560x315/800839.jpg',
    liked: false,
  },
]

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      recipes: recipes
    }
  }

  updateRecipe(id, update) {
    this.setState(this.state.recipes.map(function(recipe) {
      if (recipe._id === id) {
        recipe.liked = update
      }
    }))
  }


  render() {
    const { recipes } = this.state

    return (
      <div className="app">
        <RecipesContainer recipes={ recipes } updateRecipe={this.updateRecipe.bind(this)}/>
      </div>
    )
  }
}

export default App
