import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import AdminPage from "../../Pages/Admin/AdminPage/AdminPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Page404 from "../../Pages/Page404/Page404";
import AddVacation from "../../Pages/Vacations/AddVacation/AddVacation";
import EditVacation from "../../Pages/Vacations/EditVacation/EditVacation";
import Vacations from "../../Pages/Vacations/Vacations";
import VacationsReport from "../../Pages/Vacations/VacationsReport/VacationsReport";
import "./MainRouter.css";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vacationsPage" element={<Vacations />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/addVacation" element={<AddVacation />} />
        <Route path="/editVacation" element={<EditVacation />} />
        <Route path="/vacationsReport" element={<VacationsReport />} />
        <Route path="/" element={<MainPage />} />
        {/* Continue Page404! */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
