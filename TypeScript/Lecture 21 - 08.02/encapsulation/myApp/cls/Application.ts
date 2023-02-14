class Application {
  private appName: string = "";
  private appPrice: number = 0;
  private appSize: number = 0;
  private rating: number = 0;

  constructor(
    appName: string,
    appPrice: number,
    appSize: number,
    rating: number
  ) {
    this.setAppName(appName);
    this.setAppPrice(appPrice);
    this.setAppSize(appSize);
    this.setRating(rating);
  }

  // setters
  public setAppName(appName: string) {
    this.appName = appName;
  }

  public setAppPrice(appPrice: number) {
    if (appPrice < 0) {
      console.log("The app price must be greater than zero");
      return;
    }
    this.appPrice = appPrice;
  }

  public setAppSize(appSize: number) {
    if (appSize < 0) {
      console.log("The app size must be positive");
      return;
    }
    this.appSize = appSize;
  }

  public setRating(rating: number) {
    if (rating < 1 || rating > 5) {
      console.log("The rating must be between 1 and 5");
      return;
    }
    this.rating = rating;
  }

  // getters
  public getAppName(): string {
    return this.appName;
  }

  public getAppPrice(): number {
    return this.appPrice;
  }

  public getAppSize(): number {
    return this.appSize;
  }

  public getRating(): number {
    return this.rating;
  }

  // methods
  public print(): string {
    return `
    App name: ${this.getAppName()}
    App price: ${this.getAppPrice()}
    App size: ${this.getAppSize()}
    App rating: ${this.getRating()}
    `;
  }

  public changePrice(percent: number) {
    if (percent < 10 || percent > 50) {
      console.log("Value must be between 10 and 50");
      return;
    }
    this.setAppPrice(this.getAppPrice() * (1 - percent / 100));
  }
}

export default Application;
