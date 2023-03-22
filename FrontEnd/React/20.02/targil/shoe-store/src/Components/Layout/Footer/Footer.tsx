import Clock from "../../MyComponents/Clock/Clock";
import "./Footer.css";

function Footer(this: any): JSX.Element {
  const current = new Date();
  const year = current.getFullYear();
  return (
    <div className="Footer">
      <h2>
        &copy; כל הזכויות שמורות - עמית בלטריסקי | <span>{year}</span>
      </h2>
    </div>
  );
}

export default Footer;
