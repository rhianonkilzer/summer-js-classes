class Alligator {
    constructor(
        name,
        color,
        teeth,
        weight,
        length,
        gender,
        age
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.teeth = teeth || ''
        this.weight = weight || ''
        this.length = length || ''
        this.gender = gender || ''
        this.age = age || ''

    }

}