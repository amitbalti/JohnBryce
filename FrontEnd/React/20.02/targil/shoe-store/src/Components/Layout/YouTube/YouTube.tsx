import "./YouTube.css";

function YouTube(): JSX.Element {
  return (
    <div className="YouTube">
      <iframe
        width="30%"
        height="250"
        src="https://www.youtube.com/embed/0KKOjFULFZ4?autoplay=true&mute=false"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default YouTube;
