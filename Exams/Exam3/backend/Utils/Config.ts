class Config {
  // TODO: Change the info...
  public WebPort = 4000; // backend port
  public mySQLhost = "IP ADDRESS OF MYSQL (localhost)";
  public mySQLuser = "YOUR MYSQL USER (root)";
  public mySQLpassword = "YOUR MYSQL PASSWORD (12345678)";
  public mySQLdatabase = "YOUR DATABASE NAME";
}

const config = new Config();
export default config;
