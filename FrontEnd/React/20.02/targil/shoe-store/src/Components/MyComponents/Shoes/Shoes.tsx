import { useEffect, useState } from "react";
import "./Shoes.css";
import ShoesData from "./ShoesData/ShoesData";

function Shoes(): JSX.Element {
  const shoeList = [
    {
      id: 1,
      brandName: "Nike",
      size: 40,
      price: 400,
      picture:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
    },
    {
      id: 2,
      brandName: "Air Jordan",
      size: 45,
      price: 700,
      picture:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3816a83-1fd9-4207-90f2-0488018ca06a/air-jordan-dub-zero-mens-shoes-vYVG0Z.png",
    },
    {
      id: 3,
      brandName: "Balenciaga",
      size: 37,
      price: 1700,
      picture:
        "https://assets.teenvogue.com/photos/59b6e61652b11e4810fb5398/16:9/w_2560%2Cc_limit/triple%2520s.jpg",
    },
    {
      id: 4,
      brandName: "Adidas",
      size: 39,
      price: 380,
      picture:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4948095c2bd04bbcb5c2af1601154a02_9366/Stan_Smith_Lux_Shoes_White_HP2201_HM1.jpg",
    },
    {
      id: 5,
      brandName: "Converse",
      size: 39,
      price: 230,
      picture:
        "https://www.mrporter.com/cms/ycm/resource/blob/1283478/8e0ddd0e6e0e4c702020bfed66eef3bb/image-desktop-data.jpg",
    },
  ];

  return (
    <div className="Shoes">
      {shoeList.map((shoe) => (
        <>
          <ShoesData
            key={shoe.id}
            brandName={shoe.brandName}
            size={shoe.size}
            price={shoe.price}
            picture={shoe.picture}
          />
        </>
      ))}
    </div>
  );
}

export default Shoes;
