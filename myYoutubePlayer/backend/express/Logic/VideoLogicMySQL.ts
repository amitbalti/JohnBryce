import Song from "../Models/Song";
import Category from "../Models/Cat";

//////////// Songs ////////////
const addSong = async (newSong: Song) => {};
const deleteSong = (id: number) => {};
const getSongById = async (id: number) => {};
const getAllSongs = async () => {};
const createSongsTable = () => {};

//////////// Categories ////////////
const createCategoriesTable = () => {};
const addCategory = async (newCategory: string) => {};
const deleteCategory = (id: number) => {};
const updateCategory = (cat: Category) => {};
const getAllCategories = async () => {};

export default {
  addSong,
  deleteSong,
  getSongById,
  getAllSongs,
  createSongsTable,
  createCategoriesTable,
  addCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
};
