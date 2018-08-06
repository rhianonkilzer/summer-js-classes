class Xrayfish {
    constructor(
        name,
        color,
        weight,
        gender,
        age,
        finColor
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age || ''
        this.finColor = finColor || ''
    }

}