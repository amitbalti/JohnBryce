import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import About from "../../Pages/About/About";
import AdminPage from "../../Pages/Admin/AdminPage/AdminPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Page404 from "../../Pages/Page404/Page404";
import AddVacation from "../../Pages/Vacations/AddVacation/AddVacation";
import EditVacation from "../../Pages/Vacations/EditVacation/EditVacation";
import "./MainRouter.css";
import Home from "../../Pages/Home/Home";
import DateRangePickerMUI from "../../Pages/DateRangePickerMUI/DateRangePickerMUI";
import AdminVacations from "../../Pages/Admin/AdminVacations/AdminVacations";
import AdminVacationsStats from "../../Pages/Admin/AdminVacationsStats/AdminVacationsStats";
import UserVacations from "../../Pages/User/UserVacations/UserVacations";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminHomePage" element={<AdminPage />} />
        <Route path="/myVacations/admin" element={<AdminVacations />} />
        <Route path="/myVacations/user" element={<UserVacations />} />
        <Route path="/myVacationsStats" element={<AdminVacationsStats />} />
        <Route path="/addVacation" element={<AddVacation />} />
        <Route path="/editVacation" element={<EditVacation />} />
        <Route path="/vacationsReport" element={<AdminVacationsStats />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/datePicker" element={<DateRangePickerMUI />} /> */}

        {/* <Route path="/" element={<MainPage />} /> */}
        {/* Continue Page404! */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
