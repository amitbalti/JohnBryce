class User {
  public userId: number;
  public userName: string;
  public userMail: string;
  public isAdmin: boolean;
  public userPassword: string;

  constructor(
    userId: number,
    userName: string,
    userMail: string,
    isAdmin: boolean,
    userPassword: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userMail = userMail;
    this.isAdmin = isAdmin;
    this.userPassword = userPassword;
  }
}

export default User;
