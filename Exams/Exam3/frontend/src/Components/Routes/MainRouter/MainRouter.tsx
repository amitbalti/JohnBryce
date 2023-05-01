import { Route, Routes } from "react-router-dom";
import "./MainRouter.css";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Page404 from "../../pages/Page404/Page404";
import AllMeetings from "../../pages/AllMeetings/AllMeetings";
import AddNewMeeting from "../../pages/AddNewMeeting/AddNewMeeting";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/allMeetings" element={<AllMeetings />} />
        <Route path="/addMeeting" element={<AddNewMeeting />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
