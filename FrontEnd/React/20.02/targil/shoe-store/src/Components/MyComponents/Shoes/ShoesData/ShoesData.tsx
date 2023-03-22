import "./ShoesData.css";

interface ShoesProps {
  key: number;
  brandName: string;
  size: number;
  price: number;
  picture: string;
}

function ShoesData(props: ShoesProps): JSX.Element {
  return (
    <div className="ShoesData">
      <h3>{props.brandName}</h3>
      <h4>Size: {props.size}</h4>
      <h4>Price: {props.price}$</h4>
      <img src={props.picture} width="150" />
      <br />
      <hr />
    </div>
  );
}

export default ShoesData;
