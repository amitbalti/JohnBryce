import { Route, Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CityStreet from "../../Pages/CityStreet/CityStreet";
import Page404 from "../../Pages/Page404/Page404";
import "./MainRouter.css";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/citystreet" element={<CityStreet />} />
        <Route path="/" element={<Main />} />
        {/* Page 404 have to be last!!! */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
