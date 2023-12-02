import { useNavigate } from "react-router-dom";
import "./Error404.css";

export default function Error404() {
  const returnPage = useNavigate();

  return (
    <div className="page-404">
      <img src="src/assets/404.svg" height="60%" />
      <h2>خطای 404</h2>
      <p>صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است</p>
      <div className="error-page-buttons">
        <button
          className="return-home-page-button"
          onClick={() => returnPage("/")}
        >
          صفحه اصلی
        </button>
        <button
          className="return-last-page-button"
          onClick={() => returnPage(-1)}
        >
          صفحه قبلی
        </button>
      </div>
    </div>
  );
}
