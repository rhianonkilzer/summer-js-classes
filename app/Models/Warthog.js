class Warthog {
  //what form info do we need?
  constructor(
    name,
    gender,
    age,
    color,
    hasTusks = false,
    leftTuskLength = 0,
    rightTuskLength = 0
  ) {
    this.id = Math.random()
    this.alive = true
    this.name = name || ''
    this.gender = gender || ''
    this.age = age || 0
    this.color = color || ''
    this.hasTusks = hasTusks
    this.tusks = {
      left: leftTuskLength,
      right: rightTuskLength
    };
  }

  totalTuskLength() {
    return this.tusks.left + this.tusks.right
  }

}

export default Warthog