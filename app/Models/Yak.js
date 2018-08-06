class Yak {
    constructor(
        name,
        color,
        weight,
        gender,
        age,
        horns,
        hornLength
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age || ''
        this.horns = horns || ''
        this.hornLength = hornLength || ''
    }

}