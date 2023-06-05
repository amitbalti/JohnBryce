class Config {
  public WebPort = 8080;
  public mySQLhost = "localhost";
  public mySQLuser = "root";
  public mySQLpassword = "12345678";
  public mySQLdatabase = "myVacations";
}

const config = new Config();
export default config;
