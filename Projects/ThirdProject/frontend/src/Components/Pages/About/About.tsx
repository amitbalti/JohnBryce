import "./About.css";

function About(): JSX.Element {
  return (
    <div className="About">
      <hr
        style={{
          backgroundColor: "white",
          height: "2px",
          border: "none",
        }}
      />
      <h1 className="aboutUs">About Us</h1>
    </div>
  );
}

export default About;
