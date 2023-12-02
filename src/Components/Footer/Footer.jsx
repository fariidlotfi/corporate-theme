import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col-1">
          <h2>درباره ما</h2>
          <p className="footer-about-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط{" "}
          </p>
          <div className="footer-social-section">
            <LinkedInIcon className="footer-social-icon" />
            <WhatsAppIcon className="footer-social-icon" />
            <InstagramIcon className="footer-social-icon" />
          </div>
        </div>

        <div className="footer-col-2">
          <h2>خدمات ما</h2>
          <ul className="footer-list">
            <li>سئوی سایت</li>
            <li>تبلیغات کلیکی</li>
            <li>خدمات طراحی سایت</li>
            <li>سوشال مدیا</li>
            <li>آنالیز سئو</li>
          </ul>
        </div>

        <div className="footer-col-3">
          <h2>دسترسی سریع</h2>
          <ul className="footer-list">
            <li>صفحه اصلی</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>تیم ما</li>
            <li>قوانین</li>
          </ul>
        </div>

        <div className="footer-col-4">
          <h2>تماس با ما</h2>
          <span>آدرس:</span>
          <p>کردستان، مریوان، بلوار عبادت</p>

          <span>ایمیل:</span>
          <a href="mailto:soafery@gmail.com">soafery@gmail.com</a>

          <span>شماره تماس:</span>
          <p>0919-539-9423</p>
        </div>
      </div>



      <hr className="footer-hr" />
      <div className="down-section-footer">
        <p>تمامی مطالب سایت محفوظ می‌باشد.</p>
        <img src="src/assets/logo-light.png" height="50px"/>
        <div className="newsletter-section-footer">
            <input type="text" placeholder="آدرس ایمیل" />
            <button><TelegramIcon /></button>
        </div>
      </div>
    </footer>
  );
}
