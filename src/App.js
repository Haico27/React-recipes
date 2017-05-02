import React from 'react'
import RecipesContainer from './recipes/RecipesContainer'

const recipes = [
  {
    title: 'Creamy Vegan Linguine with Wild Mushrooms',
    summary: 'How do we make these noodles so creamy and cheesy without cream or cheese? Click to learn our secrets.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Ratatouille',
    summary: 'Delicious vegan Ratatouille with a lot of vegetables and a true pleasure for the tongue. Paradise is just 1 hour away.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Three Bean Chili with Spring Pesto',
    summary: 'Three types of beans—chickpeas, cannellini, and kidney—ensures this chili is filling and full of protein.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Rainbow Vegetarian Pad Thai with Peanuts and Basil',
    summary: 'It is brown rice noodles (because we’re currently doing the sugar free experiment again and loosely avoiding refined grains) and spiralized veggies (because veggies in noodle form feels like more noodles) and a super tangy-delicious Pad Thai sauce that you just shake up in a jar in about five seconds flat, and peanuts that almost instantly start to soak up the sauce, and a gently scrambled egg that kind of cream-ifies the whole thing.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Grilled Salmon',
    summary: 'A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9 year old loves this recipe!',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
  },
]

class App extends React.Component {
  render() {
    return (
      <div>
        <RecipesContainer recipes={ recipes }/>
      </div>
    )
  }
}

export default App
