import { SyntheticEvent, useEffect, useState } from "react";
import "./AddNewCategory.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addCategoryAction } from "../../Redux/CategoriesReducer";
import { Category } from "../../Model/Category";
import { youtube } from "../../Redux/YoutubeStore";

function AddNewCategory(): JSX.Element {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const languages = ["name", "heb", "eng", "rus", "hindi"];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/videos/allCat")
      .then((res) => setCategories(res.data));
  }, []);

  const navigate = useNavigate();

  const myCategory = (args: SyntheticEvent) => {
    let value = (args.target as HTMLInputElement).value;
    setCategory(value);
  };

  const addNewCat = () => {
    youtube.dispatch(addCategoryAction(new Category(0, category)));
    axios
      .get(`http://localhost:4000/api/v1/videos/newCat/${category}`)
      .then((res) => navigate("/"));
  };

  return (
    <div className="AddNewCategory">
      <div className="Box">
        <input
          placeholder="Category name..."
          onKeyUp={(args) => {
            setCategory(args.currentTarget.value);
          }}
        />
        <input type="submit" value="add" onClick={addNewCat} />
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <td style={{ color: "lightgray" }}>ID</td>
            <td style={{ color: "white" }}>Name</td>
            <td style={{ color: "deeppink" }}>Edit</td>
            <td style={{ color: "red" }}>Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item["id"]}>
              <td style={{ color: "lightgray" }}>{item["id"]}</td>
              <td>{item[languages[0]]}</td>
              <td style={{ color: "deeppink" }}>✏</td>
              <td
                onClick={() => {
                  axios.delete(
                    `http://localhost:4000/api/v1/videos/deleteCat/${item["id"]}`
                  );
                }}
              >
                ❌
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddNewCategory;
