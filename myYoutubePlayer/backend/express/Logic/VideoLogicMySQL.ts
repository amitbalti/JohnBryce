import Song from "../Models/Song";
import Category from "../Models/Cat";
import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";

//////////// One Time Running ////////////
// One time running: create table songs, create table categories

const createSongsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS songs (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NULL,
    img VARCHAR(255) NULL,
    title VARCHAR(255) NULL,
    url VARCHAR(255) NULL,
    video_file VARCHAR(255) NULL,
    category INT NULL,
    PRIMARY KEY (id));`;
  const response = dal_mysql.execute(SQLcommand);
};

const createCategoriesTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS youtube.categories (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX name_UNIQUE (name ASC) VISIBLE);`;
  const response = dal_mysql.execute(SQLcommand);
};

//////////// Songs ////////////
// add song, update song, delete song, getSongById, getAllSongs

const addSong = async (newSong: Song) => {
  const SQLcommand = `
  INSERT INTO youtube.songs 
  (description,img,title,url,video_file,category) 
  VALUES 
  ('${newSong.description}','${newSong.img}','${newSong.title}','${newSong.url}','',0);
  `;

  const result: OkPacket = await dal_mysql.execute(SQLcommand);
  return result.insertId;
};

// const updateSong = async (song: Song) => {
//   const SQLcommands = `
//     UPDATE
//     youtube.songs
//     SET url = '${song.url}', songName = '${song.title}', songImg = '${song.img}', category = ${song.category}, videoFile = '${song.video_file}'
//     WHERE
//     (id = ${song.id});
//     `;
//   await dal_mysql.execute(SQLcommands);
//   return true;
// };

const deleteSong = (id: number) => {
  const SQLcommand = `DELETE FROM youtube.songs WHERE id=${id}`;
  dal_mysql.execute(SQLcommand);
  return true;
};

const getSongById = async (id: number) => {
  return await dal_mysql.execute(`SELECT * FROM youtube.songs WHERE id =${id}`);
};

const getAllSongs = async () => {
  const SQLcommand = `SELECT * FROM youtube.songs`;
  return await dal_mysql.execute(SQLcommand);
};

//////////// Categories ////////////
// add category, update category, delete category, getCategoryById, getAllCategories

const addCategory = async (newCategory: string) => {
  //SQL command for adding new category
  const SQLcommand = `INSERT INTO categories (name) VALUES ('${newCategory}');`;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand); // It will execute the action, it won't return the response.
  // I need to get the response to me
  // My response is simple, therefor, the variable that I am expecting to receive, is called: OkPacket.
  // OkPacket - a packet which I get in return from the database, the OkPacket also include 'insertId'
  const categoryId = response.insertId;
  console.log("New Id", categoryId, " Message:", response.message);
  return categoryId;
};

/*
Like I have in REST request and response, 
the OkPacket is used to get responses from the 
server, in case of error and if there is no error.
*/

const deleteCategory = (id: number) => {
  //console.log("id:", id);
  const SQLcommand = `DELETE FROM categories WHERE id=${id}`;
  dal_mysql.execute(SQLcommand);
};

const updateCategory = (cat: Category) => {};

const getAllCategories = async () => {
  const SQLcommand = `SELECT * FROM categories`;
  return await dal_mysql.execute(SQLcommand);
};

export default {
  addSong,
  // updateSong,
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
