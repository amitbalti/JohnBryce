class Vacation {
  public destination: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public price: number;
  public img: string;

  constructor(
    destination: string,
    description: string,
    startDate: Date,
    endDate: Date,
    price: number,
    img: string
  ) {
    this.destination = destination;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
    this.img = img;
  }
}

export default Vacation;
