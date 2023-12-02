import "./ServiceBox.css";
import AddIcon from "@mui/icons-material/Add";

export default function ServiceBox(params) {
  return (
    <div className="service-box">
      <div className="service-header">
        <img src={params.icon} className="service-icon" />

        <h2>{params.title}</h2>
      </div>

      <p className="service-desc">{params.desc}</p>

      <div className="service-button">
        <AddIcon className="service-show-more-icon"/>
        <p className="service-show-more-link">مشاهده</p>
      </div>
    </div>
  );
}
