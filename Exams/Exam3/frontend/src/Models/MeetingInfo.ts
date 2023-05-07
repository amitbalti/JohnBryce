class MeetingInfo {
  public groupName: string;
  public startDate: string;
  public endDate: string;
  public description: string;
  public roomName: string;

  constructor(
    groupName: string,
    startDate: string,
    endDate: string,
    description: string,
    roomName: string
  ) {
    this.groupName = groupName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.roomName = roomName;
  }
}

export default MeetingInfo;
