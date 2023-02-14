import Student from "./Student";
import Teacher from "./teacher";

class MyClass {
  private serialNum: number = 0;
  private teacher: Teacher;
  private studentsArr: Student[] = [];
  private maxStudents: number = 0;

  constructor(
    serialNum: number,
    teacher: Teacher,
    studentsArr: Student[],
    maxStudents: number
  ) {
    this.setSerialNum(serialNum);
    this.setTeacher(teacher);
    this.setStudentsArr(studentsArr);
    this.setMaxStudents(maxStudents);
  }

  // setters and getters
  // setters
  public setSerialNum(serialNum: number) {
    if (serialNum < 100 || serialNum > 400) {
      console.log("Serial number must be between 100 and 400");
      return;
    }
    this.serialNum = serialNum;
  }

  public setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  public setStudentsArr(studentsArr: Student[]) {
    this.studentsArr = studentsArr;
  }

  public setMaxStudents(maxStudents: number) {
    if (maxStudents < 10 || maxStudents > 90) {
      console.log(
        "maxStudents must be between 10 and 90, set default value to 10"
      );
      this.maxStudents = 10;
      return;
    }
    this.maxStudents = maxStudents;
  }

  // getters
  public getSerialNum(): number {
    return this.serialNum;
  }

  public getTeacher(): Teacher {
    return this.teacher;
  }

  public getStudentsArr(): Student[] {
    return this.studentsArr;
  }

  public getMaxStudents(): number {
    return this.maxStudents;
  }

  // methods
  public print(): string {
    return `
    ${this.serialNum}
    ${this.teacher.print()}
    ${this.maxStudents}
    -------------------
    ${this.studentsArr.map((student) => student.print())}
    `;
  }

  public addStudent(student: Student) {
    if (this.getStudentsArr.length < this.maxStudents) {
      this.studentsArr.push(student);
    } else {
      console.log("No more students!!!");
    }
  }
}

export default MyClass;
