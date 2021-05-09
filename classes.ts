class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //method
  logDetails() {
    console.log(`The player ${this.name} has ${this.age} years old`);
  }
}

const user = new UserAccount("Emerson", 31);
