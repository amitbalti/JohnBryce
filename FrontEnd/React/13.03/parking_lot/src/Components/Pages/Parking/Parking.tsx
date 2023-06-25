import { useEffect, useState } from "react";
import Car from "../../Modal/Car";
import "./Parking.css";
import Slot from "./Slot/Slot";

function Parking(): JSX.Element {
  const [parking, setParking] = useState<Car[]>([]);

  useEffect(() => {}, []);

  return (
    <div className="Parking">
      <h1>Parking List</h1>
      {parking.map((item) => (
        <Slot key={item.parkingNumber} carData={item} />
      ))}
    </div>
  );
}

export default Parking;
