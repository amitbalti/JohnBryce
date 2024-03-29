import ShoeList from "../../MyComponents/ShoeList/ShoeList";
import RandomProduct from "../../MyComponents/Shoes/RandomProduct/RandomProduct";
import Shoes from "../../MyComponents/Shoes/Shoes";
import YouTube from "../YouTube/YouTube";
import "./Home.css";

function Home(): JSX.Element {
  const current = new Date();
  const day = current.getDay();
  let isSunMon = false;
  if (day === 1 || day === 2) {
    isSunMon = true;
  } else {
    isSunMon = false;
  }

  return (
    <div className="Home">
      {isSunMon && <h1>רק בימי ראשון ושני - 50% הנחה על נעלי Balenciaga!!!</h1>}
      {!isSunMon && <h1></h1>}
      <YouTube />
      {/* <ShoeList /> */}
      <RandomProduct />
      <Shoes />
    </div>
  );
}

export default Home;
