import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../Utils/Notify/Notify";
import "./MainPage.css";

function MainPage(): JSX.Element {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (
  //       localStorage.getItem("token") == null ||
  //       localStorage.getItem("token").length < 10
  //     ) {
  //       // no login made yet
  //       notify.error("Please login");
  //       navigate("/login");
  //     }
  //   }, []);
  return (
    <div className="MainPage">
      <h1>Welcome to your vacations page 🤩</h1>
    </div>
  );
}

export default MainPage;
