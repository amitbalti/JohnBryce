import { NavLink } from "react-router-dom";
import MainRouter from "../../Routes/MainRouter/MainRouter";
import AddNewMeeting from "../../pages/AddNewMeeting/AddNewMeeting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";
import AllMeetings from "../../pages/AllMeetings/AllMeetings";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <main>
        <MainRouter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
