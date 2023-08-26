// Re-writing previous functions as Class

class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  sayMyName() {
    return `${this.fName} .. ${this.lName}`;
  }
}

const classP1 = new Person("Bruce", "Wayne");
console.log(classP1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperhero = true;
  }

  fightsCrime() {
    console.log("Fighting Crime");
  }
}

const batman = new SuperHero("Bruce", "Wayne");
const result = batman.sayMyName();
console.log(result);
