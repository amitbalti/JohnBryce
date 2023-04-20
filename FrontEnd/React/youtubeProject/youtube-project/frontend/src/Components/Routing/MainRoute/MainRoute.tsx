import { Route, Routes } from "react-router-dom";
import Home from "../../Layout/Home/Home";
import "./MainRoute.css";
import YouTube from "../../Layout/Youtube/Youtube";
import About from "../../Pages/About/About";
import AddSongForm from "../../Pages/AddSongForm/AddSongForm";
import MyFavorites from "../../Pages/MyFavorites/MyFavorites";
import SongSearch from "../../Pages/SongSearch/SongSearch";
import Player from "../../Pages/Player/Player";
import AddNewCategory from "../../Pages/AddNewCategory/AddNewCategory";
import Page404 from "../../Pages/Page404/Page404";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<YouTube />} />
        <Route path="/home" element={<YouTube />} />
        <Route path="/about" element={<About />} />
        <Route path="/addSong" element={<AddSongForm />} />
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/search" element={<SongSearch />} />
        <Route path="/player/:title/:url" element={<Player />} />
        <Route path="/addCategory" element={<AddNewCategory />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
