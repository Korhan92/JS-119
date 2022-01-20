class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    } 
}
  
  class PrimarySchool extends School {
   constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
   }
}

const ilkokul = new PrimarySchool("MehmetAkif", 356, true)
