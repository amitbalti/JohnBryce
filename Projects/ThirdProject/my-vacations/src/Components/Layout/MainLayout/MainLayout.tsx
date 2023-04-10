import { useEffect } from "react";
import { store } from "../../Redux/store";
import MainRouter from "../../Routes/MainRouter/MainRouter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";
import { VacationDownloadedAction } from "../../Redux/VacationReducer";



function MainLayout(): JSX.Element {
  useEffect(() => {
    // store.dispatch(VacationDownloadedAction(JSON.parse(localStorage.getItem("vacations"))))
  }, []);
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      {/* <aside></aside> */}
      <main>
        <MainRouter />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default MainLayout;
