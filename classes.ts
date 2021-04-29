class Person {
  name: string;
  age: number;
  pounds: string | undefined;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Emerson", 31);

class Professional extends Person {
  constructor(rule: string, address: string) {
    super(this.name, this.age);
    this.rule = rule;
    this.address = address;
  }

  rule: string;
  address: string;
}
