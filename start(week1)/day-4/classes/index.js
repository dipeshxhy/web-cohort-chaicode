class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
}
const student1 = new Student("John", 20, "S12345");
const student2 = new Student("Jane", 22, "S54321");
