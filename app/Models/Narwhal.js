class Narwhal {
    constructor(
        name, 
        color, 
        weight, 
        gender, 
        age, 
        horn, 
        hornLength
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age || ''
        this.horn = horn || ''
        this.hornLength = hornLength || ''
    }

}