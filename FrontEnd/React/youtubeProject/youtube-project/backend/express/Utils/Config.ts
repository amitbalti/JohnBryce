class Config {
  public WebPort = 4000;
  // public dbHost = "db.thouchwand.com";
  public mySQLhost = "localhost";
  public mySQLuser = "root";
  public mySQLpassword = "12345678";
  public mySQLdatabase = "youtube";
}

const config = new Config();
export default config;
