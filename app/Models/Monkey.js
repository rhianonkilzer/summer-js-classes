class Monkey {
    constructor(
        name, 
        color, 
        weight, 
        gender, 
        age, 
        breed
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age ||''
        this.breed = breed || ''
    }

}