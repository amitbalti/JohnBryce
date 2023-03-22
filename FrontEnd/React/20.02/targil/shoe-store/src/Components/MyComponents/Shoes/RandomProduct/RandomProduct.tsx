import { useEffect, useState } from "react";
import "./RandomProduct.css";

function RandomProduct(): JSX.Element {
  const shoes = ["Nike", "Air Jordan", "Balenciaga", "Adidas", "Converse"];

  const getRandom = (myArr: any) => {
    return myArr[Math.floor(Math.random() * myArr.length)];
  };

  const [shoe, setShoe] = useState(getRandom(shoes));

  useEffect(() => {
    setInterval(() => {
      setShoe(getRandom(shoes));
    }, 1000);
  }, []);
  return (
    <div className="RandomProduct">
      <h3>{shoe}</h3>
    </div>
  );
}

export default RandomProduct;
