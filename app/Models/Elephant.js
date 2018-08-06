class Elephant {
    constructor(
        name,
        color,
        weight,
        gender,
        age,
        tusks
    ) {

        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age || ''
        this.tusks = tusks || ''
    }

}