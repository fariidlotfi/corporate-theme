import "./ProgressBar.css";

export default function ProgressBar(params) {
  const { title, percent, bgColor } = params;

  return (
    <div className="progress-bar-section">
      <span>{title}</span>
      <div
        className="progress-bar"
        style={{ width: percent + "%", background: bgColor }}
      ></div>
      <span className="progress-percent" style={{ left: 100 - percent + "%" }}>
        {percent + "%"}
      </span>
    </div>
  );
}
