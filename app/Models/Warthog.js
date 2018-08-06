class Warthog {
  //what form info do we need?
  constructor(
    name,
    gender,
    age,
    color,
    hasTusks
  ) {
    this.id = Math.random()
    this.alive = true
    this.name = name || ''
    this.gender = gender || ''
    this.age = age || 0
    this.color = color || ''
    this.hasTusks = hasTusks || ''
  }

}

export default Warthog