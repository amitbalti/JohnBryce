import MainRouter from "../../Routes/MainRouter/MainRouter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      {/* <aside></aside> */}
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
