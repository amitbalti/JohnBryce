import { useEffect } from "react";
import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Header from "../Header/Header";
import "./MainLayout.css";
import { store } from "../../Redux/store";
import { CarDownloadedAction } from "../../Redux/CarReducer";
import Car from "../../Modal/Car";

function MainLayout(): JSX.Element {
  useEffect(()=>{
    updateData();
  },[]);

const updateData = async () => {
  if (localStorage.getItem("parking") === null) {
    // if (true) {
    let tempCar = [];
    for (let index = 0; index < 190; index++) {
      tempCar.push(new Car("na", "na", "na", 0, 0, 0, index));
    }
    // console.log("all cars: ", tempCar);
    localStorage.setItem("parking", JSON.stringify(tempCar));
  }
}

  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <main>
        <MainRoutes />
      </main>
    </div>
  );
}

export default MainLayout;
