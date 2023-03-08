class Donation {
  public timeStamp: number;
  public donorName: string;
  public donorSum: number;
  public donorMemo: string;

  constructor(
    timeStamp: number,
    donorName: string,
    donorSum: number,
    donorMemo: string
  ) {
    this.timeStamp = timeStamp;
    this.donorName = donorName;
    this.donorSum = donorSum;
    this.donorMemo = donorMemo;
  }
}
export default Donation;
