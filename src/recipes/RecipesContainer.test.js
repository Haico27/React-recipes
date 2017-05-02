import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipesContainer from './RecipesContainer'
import Title from '../components/Title'

chai.use(chaiEnzyme)

describe('<RecipesContainer />', () => {
  const container = shallow(<RecipesContainer recipes= {[]} />)

  it('is wrapped in a div with classname "recipes"', () => {
    expect(container).to.have.className('recipes')
    expect(container).to.have.className('wrapper')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the title to "Recipes"', () => {
    expect(container).to.contain(<Title content="Recipes" />)
  })
})
