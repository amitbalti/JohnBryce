class Teacher {
  private name: string = "";
  private subjectSpecialization: string = "";

  constructor(name: string, subjectSpecialization: string) {
    this.setName(name);
    this.setSubjectSpecialization(subjectSpecialization);
  }

  // setters
  public setName(name: string) {
    this.name = name;
  }

  public setSubjectSpecialization(subjectSpecialization: string) {
    if (
      this.subjectSpecialization != "Math" &&
      this.subjectSpecialization != "Physics" &&
      this.subjectSpecialization != "History" &&
      this.subjectSpecialization != "Programming"
    ) {
      console.log("unknown subject");
      return;
    }
    this.subjectSpecialization = subjectSpecialization;
  }

  // getters
  public getName(): string {
    return this.name;
  }

  public getSubjectSpecialization(): string {
    return this.subjectSpecialization;
  }

  public print(): string {
    return `name: ${this.name}, subject: ${this.subjectSpecialization}`;
  }
}

export default Teacher;
