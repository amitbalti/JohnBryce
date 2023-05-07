class Meetings {
  public id: number;
  public groupId: number;
  public startDate: Date;
  public startTime: Date;
  public endDate: Date;
  public endTime: Date;
  public description: string;
  public roomName: string;

  constructor(
    id: number,
    startDate: Date,
    startTime: Date,
    endDate: Date,
    endTime: Date,
    description: string,
    roomName: string
  ) {
    this.id = id;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endDate = endDate;
    this.endTime = endTime;
    this.description = description;
    this.roomName = roomName;
  }
}

export default Meetings;
