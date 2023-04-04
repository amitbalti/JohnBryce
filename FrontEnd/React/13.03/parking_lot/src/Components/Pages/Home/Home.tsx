import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../Utils/Notify/Notify";
import "./Home.css";

function Home(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token").length < 10
    ) {
      // no login made yet
      notify.error("Please login");
      navigate("/login");
    }
  }, []);
  return (
    <div className="Home">
      <h1>We will put here picture and some info</h1>
    </div>
  );
}

export default Home;
