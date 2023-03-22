import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Donation from "../../../models/donation";
import "./DonationList.css";

function DonationList(): JSX.Element {
  // const donationList: Donation[] = JSON.parse(
  // localStorage.getItem("userDonation")
  // );
  const [donationList, setList] = useState<Donation[]>([]);
  // console.log("donationList: ", donationList);
  const navigate = useNavigate();

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("userDonation")));
  }, [donationList]);

  const getTimeStamp = (timeStamp: number) => {
    return new Date(timeStamp).toLocaleString(); // convert timeStamp 1678262491314 => to local date 08/03/2023
  };

  const deleteDonation = (timeStamp: number) => {
    const newList = donationList.filter((item) => item.timeStamp != timeStamp);

    localStorage.setItem("userDonation", JSON.stringify(newList));
    setList(newList);
  };

  return (
    <div className="DonationList">
      <h1>Donation List</h1>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Sum</th>
            <th>Memo</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {donationList.map((donation) => (
            <tr key={donation.timeStamp}>
              {/* <td>{`${+new Date(donation.timeStamp).getDate()}/${+new Date(
                donation.timeStamp
              ).getMonth()}/${+new Date(
                donation.timeStamp
              ).getFullYear()}`}</td> */}
              <td>{getTimeStamp(donation.timeStamp)}</td>
              <td>{donation.donorName}</td>
              <td>{donation.donorSum}</td>
              <td>{donation.donorMemo}</td>
              <td
                onClick={() =>
                  navigate(
                    `/info/${donation.donorSum}/${donation.donorName}/${donation.donorMemo}/${donation.timeStamp}`
                  )
                }
              >
                ✏️
              </td>
              <td onClick={() => deleteDonation(donation.timeStamp)}>❌</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonationList;
