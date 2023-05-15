import { Route, Routes } from "react-router-dom";
import "./MainRouter.css";
import Youtube from "../../Layout/Youtube/Youtube";
import About from "../../Pages/About/About";
import AddSongForm from "../../Pages/AddSongForm/AddSongForm";
import MyFavorites from "../../Pages/MyFavorites/MyFavorites";
import SongSearch from "../../Pages/SongSearch/SongSearch";
import Player from "../../Pages/Player/Player";
import AddNewCategory from "../../Pages/AddNewCategory/AddNewCategory";
import Page404 from "../../Pages/Page404/Page404";
import Export from "../../Pages/Export/Export";

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/" element={<Youtube />} />
        <Route path="/home" element={<Youtube />} />
        <Route path="/about" element={<About />} />
        <Route path="/addSong" element={<AddSongForm />} />
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/search" element={<SongSearch />} />
        <Route path="/player/:title/:url" element={<Player />} />
        <Route path="/addCategory" element={<AddNewCategory />} />
        <Route path="/export" element={<Export />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
