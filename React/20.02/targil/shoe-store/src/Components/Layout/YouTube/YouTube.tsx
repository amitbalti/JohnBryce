import "./YouTube.css";

function YouTube(): JSX.Element {
  return (
    <div className="YouTube">
      <iframe
        width="80%"
        height="650"
        src="https://www.youtube.com/embed/0KKOjFULFZ4?autoplay=1&mute=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default YouTube;
