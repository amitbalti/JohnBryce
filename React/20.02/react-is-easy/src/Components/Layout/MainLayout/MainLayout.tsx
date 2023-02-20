import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    // JSX element - the X - is extended. React TypeScript eventually will translate it into JS.
    return (
        <div className="MainLayout">
           <header>
                <Header/>
           </header>
           <aside>
                <Menu/>
           </aside>
           <main>
                <Main/>
           </main>
           <footer>
                <Footer/>
           </footer>
        </div>
    );
}

export default MainLayout;

// MainLayout -> Header/footer/Menu/Main