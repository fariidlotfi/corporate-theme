import "./IconBox.css";

export default function IconBox(params) {
  const {icon, title, desc} = params;
  return (
    <div className="icon-box">
      {/* <MapIcon  className="icon-box-icon"/> */}
      <img src={icon} className="icon-box-icon" />
      <div className="icon-texts">
        <p className="icon-title">{title}</p>
        <p className="icon-desc">{desc}</p>
      </div>
    </div>
  );
}
