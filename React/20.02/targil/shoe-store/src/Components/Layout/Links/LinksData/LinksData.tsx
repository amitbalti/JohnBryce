import "./LinksData.css";

interface LinkProps {
  linkVal: string;
  linkUrl: string;
}

function LinksData(props: LinkProps): JSX.Element {
  return (
    <div className="LinksData">
      <h3></h3>
      <a href={props.linkUrl} target="_blank">
        {props.linkVal}
      </a>
      <br />
      <hr />
    </div>
  );
}

export default LinksData;
