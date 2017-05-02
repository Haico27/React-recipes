import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'

chai.use(chaiEnzyme)

const recipe = {
    title: 'Creamy Vegan Linguine with Wild Mushrooms',
    summary: 'How do we make these noodles so creamy and cheesy without cream or cheese? Click to learn our secrets.',
    vegan: true,
    vegetarian: false,
    pescatarian: false,
  }

  describe('<RecipeItem />', () => {
    const container = shallow(<RecipeItem { ...recipe } />)

    it('is wrapped in a article tag with classname "recipe"', () => {
      expect(container).to.have.className('recipe')
      expect(container).to.have.tagName('article')
    })

    it('contains a title', () => {
      expect(container.find('h1')).to.have.text(recipe.title)
    })

    it('shows a 🌱 when vegetarian', () => {
      expect(container.find('ul > li')).to.have.text('🌱')
    })
  })

  describe('when vegetarian, it', () => {
    const container = shallow(<RecipeItem {...recipe} vegetarian={ true } vegan={ false } />)

    it('shows a 🍳', () => {
      expect(container.find('ul > li')).to.have.text('🍳')
    })
  })

  describe('when pescatarian, it', () => {
    const container = shallow(<RecipeItem {...recipe} pescatarian={ true } vegetarian={ false } vegan={ false } />)

    it('shows a 🐟', () => {
      expect(container.find('ul > li')).to.have.text('🐟')
    })
  })
