import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import cat from "../../../Model/Cat";
import "./Categories.css";
import Category from "../../../Model/Category";

function Categories(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="Categories">
      Categories
      <hr />
      {cat.allCat().map((item: Category) => (
        <div>{item.name}</div>
      ))}
      <br />
      <br />
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/addSong")}
        >
          Add Song
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/addCat")}
        >
          Add Category
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Categories;
