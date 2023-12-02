import "./UpperNavBar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function UpperNavBar() {
  return (
    <div className="upper-navbar">
      <div className="upper-nav-contacts">
        <div className="upper-nav-info">
          <LocationOnIcon className="upper-nav-icon" />
          <p>کردستان، مریوان</p>
        </div>

        <div className="upper-nav-info">
          <MailOutlineIcon className="upper-nav-icon" />
          info@faridlotfi.ir
        </div>

        <div className="upper-nav-info">
          <PhoneEnabledIcon className="upper-nav-icon" />
          +989195399423
        </div>
      </div>

      <div className="upper-nav-socials">
        <div className="upper-nav-info-add">
          <AccessAlarmIcon className="upper-nav-icon" />
          <p>شنبه تا چهارشنبه از ۸ الی ۲۰</p>
        </div>
        <div className="upper-nav-socials-icons">
          <LinkedInIcon className="upper-nav-social-icon" />
          <InstagramIcon className="upper-nav-social-icon" />
          <YouTubeIcon className="upper-nav-social-icon" />
        </div>
      </div>
    </div>
  );
}
