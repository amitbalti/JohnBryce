class Vacation {
  public vacationId: number;
  public destination: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public price: number;
  public img: string;

  constructor(
    vacationId: number,
    destination: string,
    description: string,
    startDate: Date,
    endDate: Date,
    price: number,
    img: string
  ) {
    this.vacationId = vacationId;
    this.destination = destination;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
    this.img = img;
  }
}

export default Vacation;
