import "./Footer.css";

function Footer(this: any): JSX.Element {
  const current = new Date();
  const year = current.getFullYear();
  return (
    <div className="Footer">
      <h2>
        כל הזכויות שמורות - מוישה אופניק אתרים | <span>{year}</span>
      </h2>
    </div>
  );
}

export default Footer;
