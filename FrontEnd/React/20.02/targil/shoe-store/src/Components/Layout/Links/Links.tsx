import Clock from "../../MyComponents/Clock/Clock";
import "./Links.css";
import LinksData from "./LinksData/LinksData";

function Links(): JSX.Element {
  const links = [
    { id: 1, linkVal: "Air Jordan", linkUrl: "https://www.nike.com/jordan" },
    {
      id: 2,
      linkVal: "Adidas Men",
      linkUrl: "https://www.adidas.com/us/men-shoes",
    },
    {
      id: 3,
      linkVal: "Adidas Women",
      linkUrl: "https://www.adidas.com/us/women-shoes",
    },
    {
      id: 4,
      linkVal: "Balenciaga",
      linkUrl: "https://www.balenciaga.com/en-us/all/shoes",
    },
  ];
  return (
    <div className="Links">
      <Clock />

      <h1 className="headTitle">לינקים מומלצים לנעליים</h1>
      <h3>
        {links.map((link) => (
          <>
            <LinksData
              key={link.id}
              linkVal={link.linkVal}
              linkUrl={link.linkUrl}
            />
          </>
        ))}
      </h3>
    </div>
  );
}

export default Links;
