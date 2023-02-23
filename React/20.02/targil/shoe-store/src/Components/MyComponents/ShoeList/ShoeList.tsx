import "./ShoeList.css";

function ShoeList(): JSX.Element {
  const shoeList = [
    { id: 1, module: "Nike" },
    { id: 2, module: "Air Jordan" },
    { id: 3, module: "Balenciaga" },
    { id: 4, module: "Adidas" },
    { id: 5, module: "Converse" },
  ];

  return (
    <div className="ShoeList">
      <ul>
        List of optional shoes:
        <li>{shoeList[0].module}</li>
        <li>{shoeList[1].module}</li>
        <li>{shoeList[2].module}</li>
        <li>{shoeList[3].module}</li>
        <li>{shoeList[4].module}</li>
      </ul>
    </div>
  );
}

export default ShoeList;
