class Quail {
    constructor(
        name, 
        color, 
        weight, 
        gender, 
        age
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.weight = weight || ''
        this.gender = gender || ''
        this.age = age ||''
    
    }

}