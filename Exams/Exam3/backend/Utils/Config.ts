class Config {
  public WebPort = 4000; //backend port
  public mySQLhost = "localhost";
  public mySQLuser = "root";
  public mySQLpass = "12345678";
  public mySQLdatabase = "DevelopmentGroups";
}

const config = new Config();
export default config;
