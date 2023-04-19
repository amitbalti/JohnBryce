import { Button, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cat from "../../../Model/Cat";
import Song from "../../../Model/Song";
import "./AddCat.css";
import Category from "../../../Model/Category";

function AddCat(): JSX.Element {
  const apiKey = "AIzaSyCmnsJKtqLArOWjrLqhV3FBvIJ5GEE6lYY";
  const [catName, setName] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>();

  const send = async (userData: Category) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/videos/newCat/${userData.name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add categoty");
      }

      alert("Category added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add category");
    }
    navigate("/");
  };
  return (
    <div className="AddCat Box">
      <h1>Add New Category</h1>
      <br />
      <form onSubmit={handleSubmit(send)}>
        <TextField
          type="text"
          placeholder="Enter Category Name"
          {...register("name")}
        />
        <br />
        <br />
        <Button type="submit" fullWidth color="success" variant="outlined">
          Add Category
        </Button>
      </form>
    </div>
  );
}

export default AddCat;
