import SingleDonation from "../AddDonation/SingleDonation/SingleDonation";
import AddDonation from "../AddDonation/AddDonation";
import "./DonationInfo.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DonationInfo(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const userDonation = +(params.donationSum || 0);
  const [sum, setSum] = useState(userDonation);
  const [donor, setDonor] = useState("");
  const [memo, setMemo] = useState("");

  const makeADonation = () => {
    // save to local hard disk

    //navigate to thanks
    navigate("/thanks");
  };

  return (
    <div className="DonationInfo">
      <h1>Donation Info</h1>
      <hr />
      <br />

      <div className="Box">
        <input
          type="text"
          onChange={(args) => setDonor(args.target.value)}
          placeholder="Donor name"
        />
        <br />
        <br />
        {params.sum === "0" ? (
          <input
            type="number"
            onChange={(args) => setSum(+args.target.value)}
            placeholder="Donation sum"
          />
        ) : (
          <h2>{params.sum} nis</h2>
        )}
        <br />
        <br />
        <input
          type="test"
          onChange={(args) => setMemo(args.target.value)}
          placeholder="Memo"
        />
        <br />
        <br />
        <button onClick={makeADonation}>Make donation</button>
      </div>
    </div>
  );
}

export default DonationInfo;
