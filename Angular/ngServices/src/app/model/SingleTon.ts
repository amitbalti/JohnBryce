class MySingleTone {
  private myInstance: MySingleTone; // the 'show' is the class.

  // constructor is private, we cannot do a new command
  private constructor() {
    console.log('In Constructor');
    this.myInstance = new MySingleTone();
  }

  public getInstance() {
    // If I don't have a 'show', it will create the show and then it will return it to me
    // check if myInstance is null
    if (this.myInstance === null) {
      // if it's null, create a new instance
      this.myInstance = new MySingleTone();
    }
    // If I do have a 'show', it will return it to me.
    // return the instance
    return this.myInstance;
  }
}
