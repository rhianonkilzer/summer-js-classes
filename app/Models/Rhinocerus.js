class Rhinocerus {
    constructor(
        name, 
        color, 
        weight, 
        gender, 
        age,
        hornLength
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age ||''
    this.hornLength = hornLength || ''
    }

}