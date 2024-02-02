import "./About.css";
import PageTitle from "../../Components/Pages Title/PageTitle";
import NavBar from "../../Components/NavBar/MidNavBar.jsx";

import CompanySpec from "../../Components/Company Spec/CompanySpec.jsx";
import ProgressBar from "../../Components/Progress Bar/ProgressBar.jsx";

import Footer from "../../Components/Footer/Footer.jsx";
import IconBox from "../../Components/Icon Box/IconBox.jsx";

import TeamMember from "../../Components/Team Member Box/TeamMember.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function About() {
  const socialLinks = [
    { id: 1, icon: <TwitterIcon />, link: "https://twitter.com/farid" },
    { id: 2, icon: <WhatsAppIcon />, link: "#" },
    { id: 3, icon: <LinkedInIcon />, link: "#" },
  ];

  return (
    <>
      <NavBar sticky="true" />
      <PageTitle title="درباره ما" breadcrumb="خانه -> درباره ما" />
      <div className="about-container">
        <div className="about-first">
          <div className="about-first-col-1">
            <img src="assets/about1.jpg" className="about-first-image" />
            <div className="about-first-counter-section">
              <span>26K</span>
              <p>مشتریان راضی</p>
            </div>
          </div>

          <div className="about-first-col-2">
            <h2>توسعه‌ی برندهای مشهور و نام آشنا توسط تیم متخصص ما</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای{" "}
            </p>
            <CompanySpec
              title="ویژگی یک"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و "
            />
            <CompanySpec
              title="ویژگی یک"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و "
            />
          </div>
        </div>

        <div className="about-second">
          <div className="about-second-col-1">
            <span className="about-page-subtitle">حوزه‌های تخصص</span>
            <h2>آرائه راه‌حل‌های متناسب با کسب‌وکار و بیزینس شما</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و{" "}
            </p>
          </div>

          <div className="about-second-col-2">
            <ProgressBar title="مارکتینگ" percent="80" bgColor="#cc381a" />
            <ProgressBar title="سئو" percent="60" />
            <ProgressBar title="مشاوره" percent="70" />
          </div>
        </div>

        <div className="about-page-third">
          <div className="about-third-col-1">
            <h2>
              با بیش از ۲۶ سال سابقه درخشان به بیشتر از 150 هزار کسب‌وکار کمک
              کردیم
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و{" "}
            </p>
            <button>همه مشتریان</button>
          </div>

          <div className="about-third-col-2">
            <IconBox image="assets/react.svg" />
            <IconBox image="assets/react.svg" />
            <IconBox image="assets/react.svg" />
            <IconBox image="assets/react.svg" />
            <IconBox image="assets/react.svg" />
            <IconBox image="assets/react.svg" />
            <IconBox image="assets/react.svg" />
          </div>
        </div>
      </div>
      <section id="team-member">
        <span className="team-member-subtitle">تیم ما</span>
        <h2 className="team-member-title">
          در زیر اعضای تیم متخصص ما را می‌توانید مشاهده نمایید
        </h2>

        <div className="team-members-area">
          <TeamMember
            name="فرید لطفی"
            role="برنامه‌نویس"
            image="assets/team1.jpg"
            socialLinks={socialLinks}
          />
          <TeamMember
            name="مهناز محمدی"
            role="طراح گرافیک"
            image="assets/team2.jpg"
            socialLinks={socialLinks}
          />
          <TeamMember
            name="میثم میلادی"
            role="دیجیتال مارکتر"
            image="assets/team3.jpg"
            socialLinks={socialLinks}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
