import Warthog from './Warthog.js'

class Lion {
  // WHAT ARE THE FORM FIELDS?
  constructor(
    name, 
    hairColor, 
    gender, 
    maneColor, 
    weight
  ) {
    this.id = Math.random()
    this.name = name || ''
    this.hairColor = hairColor || ''
    this.gender = gender || ''
    this.maneColor = maneColor || ''
    this.weight = weight || 0
  }

  eat(food) {
    if (food instanceof Warthog) {
      console.log('YUMMY PORK')
      food.alive = false
    } else {
      console.error('[FOOD ERROR] sorry lions dont eat that', food)
    }
  }

  roar() {
    console.log(this.name + ' is RAWRing')
  }

}

export default Lion