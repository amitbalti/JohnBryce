import "./DonationInfo.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Donation from "../../../models/donation";

function DonationInfo(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const userDonation = +(params.donationSum || 0);
  const userTimeStamp = +(params.timeStamp || 0);

  const [sum, setSum] = useState(userDonation);
  const [donor, setDonor] = useState(params.donationOwner || "");
  const [memo, setMemo] = useState(params.donationMemo || "");

  useEffect(() => {
    if (userTimeStamp > 0) {
      // if it large then zero, we are editing
      setDonor(params.donationOwner);
      setMemo(params.donationMemo);
      setSum(userDonation);
    }
  }, []);

  let myDonations: Donation[] = [];

  const makeADonation = () => {
    const timeStamp = new Date().getTime();
    // timeStamp - there is no chance that someone will make the same action for the same person at the exact same millisecond.
    // This is why we will use timeStamp as our local storage.

    // object = timeStamp, donorName, sum, memo.
    const itemToSave = new Donation(timeStamp, donor, sum, memo);
    console.log(itemToSave);

    // save to local hard disk
    if (localStorage.getItem("userDonation")) {
      myDonations = JSON.parse(localStorage.getItem("userDonation"));
    }
    // myDonations = Object
    if (userTimeStamp > 0) {
      myDonations = myDonations.filter(
        (donation) => donation.timeStamp != userTimeStamp
      );
    }
    myDonations.push(itemToSave);
    localStorage.setItem("userDonation", JSON.stringify(myDonations));
    //navigate to thanks
    navigate("/thanks");
  };

  return (
    <div className="DonationInfo">
      <h1>Donation Info</h1>
      <hr />
      <br />
      <div className="Box">
        {userTimeStamp === 0 ? (
          <input
            type="text"
            onChange={(args) => setDonor(args.target.value)}
            placeholder="Donor name"
          />
        ) : (
          <input
            type="text"
            onChange={(args) => setDonor(args.target.value)}
            value={donor}
          />
        )}
        <br />
        <br />
        {userDonation === 0 ? (
          <input
            type="number"
            onChange={(args) => setSum(+args.target.value)}
            placeholder="Donation sum"
          />
        ) : (
          <h2>{userDonation} nis</h2>
        )}
        <br />
        <br />
        {userTimeStamp === 0 ? (
          <input
            type="test"
            onChange={(args) => setMemo(args.target.value)}
            placeholder="Memo"
          />
        ) : (
          <input
            type="test"
            onChange={(args) => setMemo(args.target.value)}
            value={memo}
          />
        )}
        <br />
        <br />
        <button onClick={makeADonation}>Make donation</button>
      </div>
    </div>
  );
}

export default DonationInfo;
