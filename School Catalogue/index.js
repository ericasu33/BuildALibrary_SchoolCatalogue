class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._students;
  }

  set numberOfStudents(num) {
    if(typeof num === "number"){
      this._numberOfStudents = num;
    } else {
      return "Invalid Input: numberOfStudents must be set to a Number."
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    //param takes arr of strs.
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    console.log(substituteTeachers[randomIndex]);
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    //sportsTeams takes in an arr of strs.
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

class SchoolCatalog {
  //arr of schools?
  constructor(school, num) {
      this._school = [
        {
          schoolName: school,
          numOfStudents: num
        }
        ];
  }

  get school() {
    return this._school;
  }

  addSchool(schoolName, numOfStudents) {
    this._school.push({schoolName, numOfStudents});
  }
}

const Primary = new SchoolCatalog("Armstrong", 500);
//console.log(Primary);
Primary.addSchool("Nelson", 450);
console.log(Primary.school);
// console.log(Primary.school);



// const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// console.log(alSmith.sportsTeams);

// const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
// console.log(lorraineHansbury);
// lorraineHansbury.quickFacts();
// School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
