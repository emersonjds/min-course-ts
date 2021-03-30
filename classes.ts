class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const person = new Person("Emerson",31)

class Professional extends Person {
    
    rule: string
    address: string

    constructor(rule: string, address: string) {
        super(name: string, address: string)
        this.rule = rule
        this.address = address
    }
    
}