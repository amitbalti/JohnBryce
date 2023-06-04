class Config {
  public WebPort = 8080; //backend port
  public mySQLhost = "localhost";
  public mySQLuser = "root";
  public mySQLpass = "12345678";
  public mySQLdatabase = "BankAccounts";
}

const config = new Config();
export default config;
