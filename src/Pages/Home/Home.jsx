import "./Home.css";
import "./Responsive.css";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CompanySpec from "../../Components/Company Spec/CompanySpec.jsx";
import Carousel from "../../Components/Swiper Carousel/Carousel.jsx";
import WestIcon from "@mui/icons-material/West";
import ForumIcon from "@mui/icons-material/Forum";
import AddIcon from "@mui/icons-material/Add";
import TeamMember from "../../Components/Team Member Box/TeamMember.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReviewBox from "../../Components/Review Box/ReviewBox.jsx";
import BlogBox from "../../Components/Blog Box/BlogBox.jsx";
import IconBox from "../../Components/Icon Box With Desc/IconBox.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


export default function Home() {
  const allServices = [
    {
      id: 1,
      title: "طراحی سایت",
      icon: "src/assets/code.svg",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله",
    },
    {
      id: 2,
      title: "سئوی سایت",
      icon: "src/assets/up.svg",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله",
    },
    {
      id: 3,
      title: "تولید محتوا",
      icon: "src/assets/pen.svg",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله",
    },
    {
      id: 4,
      title: "توسعه اپلیکیشن",
      icon: "src/assets/code.svg",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله",
    },
  ];

  const socialLinks = [
    { id: 1, icon: <TwitterIcon />, link: "https://twitter.com/farid" },
    { id: 2, icon: <WhatsAppIcon />, link: "#" },
    { id: 3, icon: <LinkedInIcon />, link: "#" },
  ];

  return (
    <>
      <NavBar />

      {/* ----------------------- header section ------------------------- */}
      <div className="home-hero-section">
        <div className="hero-section-data">
          <div className="home-hero-texts">
            <span>ارائه خدمات شبکه</span>
            <h2>ارائه بهترین محصولات و خدمات تحت شبکه</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و{" "}
            </p>
            <button>شروع کنید</button>
          </div>

          <div className="home-hero-appointment">
            <form>
              <h2>درخواست مشاوره</h2>
              <p>
                با استفاده از فرم زیر درخواست مشاوره خود را ثبت نمایید تا با شما
                تماس بگیریم
              </p>
              <input type="text" placeholder="نام و نام خانوادگی" />
              <input type="tel" placeholder="شماره تماس" />
              <select>
                <option>دپارتمان فروش</option>
                <option>دپارتمان مشتریان</option>
                <option>دپارتمان مدیریت</option>
              </select>
              <button>
                ارسال <KeyboardBackspaceIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ----------------------- header section ------------------------- */}

      {/* ----------------------- about section ------------------------- */}

      <section id="about">
        <div className="about-img">
          <img src="src/assets/2.jpg" />
          <div className="about-img-text">
            <span>2500+</span>
            <p>مشتریان راضی</p>
          </div>
        </div>

        <div className="about-texts">
          <div className="about-bar-bg"></div>
          <div className="about-bar-color"></div>

          <span>25 سال سابقه درخشان</span>
          <h2>
            ما به شرکت‌های حوزه دیجیتال کمک می‌کنیم تا شاهد رشد عظیمی باشند.
          </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای{" "}
          </p>

          <CompanySpec
            title="ویژگی یک"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله"
          />
          <CompanySpec
            title="ویژگی دو"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله"
          />
        </div>
      </section>

      {/* ----------------------- about section ------------------------- */}

      {/* ----------------------- service section ------------------------- */}

      <section id="services">
        <span className="service-section-subtitle">خدمات ما</span>
        <h2 className="service-section-title">
          خدماتی که بصورت تخصصی توسط ما ارائه می‌شوند
        </h2>

        <div className="service-section-services">
          <Carousel service={allServices} />

          {/* <ServiceBox title="ویژگی یک" icon="src/assets/code.svg" desc="sadsa sad sad sad asd asdsadsadsad  sddsa sadsadasd dsa sadd" />
          <ServiceBox title="ویژگی دو" icon="src/assets/code.svg" desc="sadsa sad sad sad asd asdsadsadsad  sddsa sadsadasd dsa sadd" />
          <ServiceBox title="ویژگی سه" icon="src/assets/code.svg" desc="sadsa sad sad sad asd asdsadsadsad  sddsa sadsadasd dsa sadd" /> */}
        </div>
      </section>

      {/* ----------------------- service section ------------------------- */}

      {/* ----------------------- service section ------------------------- */}
      <section id="about-second">
        <div className="about-second-data">
          <div className="about-second-first-col">
            <h2>
              ما تمامی خدماتی که شما برای گسترش کسب و کار خود نیاز دارید را
              ارائه می‌دهیم.
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله{" "}
            </p>

            <div className="about-second-numbers">
              <div>
                <span>18</span>
                <p>مشتری راضی</p>
              </div>
              <div>
                <span>18</span>
                <p>مشتری راضی</p>
              </div>
            </div>
          </div>

          <div className="about-second-second-col">
            <button className="about-second-button-fill">
              تماس با ما <WestIcon />
            </button>
            <button className="about-second-button-trans">
              مشاوره رایگان <ForumIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------- service section ------------------------- */}

      {/* ----------------------- portfolio section ------------------------- */}
      <section id="portfolio">
        <span className="portfolio-section-subtitle">پروژه‌های ما</span>
        <h2 className="portfolio-section-title">
          پروژه‌های انجام شده توسط تیم متخصص برای مشتریان
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-item">
            <img src="src/assets/p1.jpg" className="portfolio-img" />
            <span className="portfolio-title">عنوان پروژه</span>
            <p className="portfolio-cat">موضوع</p>
            <button className="portfolio-link">
              <AddIcon />
            </button>
          </div>
          <div className="portfolio-item large">
            <img src="src/assets/p2.jpg" className="portfolio-img" />
            <span className="portfolio-title">عنوان پروژه</span>
            <p className="portfolio-cat">موضوع</p>
            <button className="portfolio-link">
              <AddIcon />
            </button>
          </div>
          <div className="portfolio-item">
            <img src="src/assets/p3.jpg" className="portfolio-img" />
            <span className="portfolio-title">عنوان پروژه</span>
            <p className="portfolio-cat">موضوع</p>
            <button className="portfolio-link">
              <AddIcon />
            </button>
          </div>
          <div className="portfolio-item large">
            <img src="src/assets/p1.jpg" className="portfolio-img" />
            <span className="portfolio-title">عنوان پروژه</span>
            <p className="portfolio-cat">موضوع</p>
            <button className="portfolio-link">
              <AddIcon />
            </button>
          </div>
          <div className="portfolio-item">
            <img src="src/assets/p2.jpg" className="portfolio-img" />
            <span className="portfolio-title">عنوان پروژه</span>
            <p className="portfolio-cat">موضوع</p>
            <button className="portfolio-link">
              <AddIcon />
            </button>
          </div>
          <div className="portfolio-item large">
            <img src="src/assets/p3.jpg" className="portfolio-img" />
            <span className="portfolio-title">عنوان پروژه</span>
            <p className="portfolio-cat">موضوع</p>
            <button className="portfolio-link">
              <AddIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------- portfolio section ------------------------- */}

      {/* ----------------------- member section ------------------------- */}
      <section id="team-member">
        <span className="team-member-subtitle">تیم ما</span>
        <h2 className="team-member-title">
          در زیر اعضای تیم متخصص ما را می‌توانید مشاهده نمایید
        </h2>

        <div className="team-members-area">
          <TeamMember
            name="فرید لطفی"
            role="برنامه‌نویس"
            image="src/assets/team1.jpg"
            socialLinks={socialLinks}
          />
          <TeamMember
            name="مهناز محمدی"
            role="طراح گرافیک"
            image="src/assets/team2.jpg"
            socialLinks={socialLinks}
          />
          <TeamMember
            name="میثم میلادی"
            role="دیجیتال مارکتر"
            image="src/assets/team3.jpg"
            socialLinks={socialLinks}
          />
        </div>
      </section>

      {/* ----------------------- member section ------------------------- */}

      {/* ----------------------- review section ------------------------- */}

      <section id="customer-reviews">
        <span className="customer-review-subtitle">تیم ما</span>
        <h2 className="customer-review-title">
          در زیر اعضای تیم متخصص ما را می‌توانید مشاهده نمایید
        </h2>

        <div className="reviews-area">
          <ReviewBox />
        </div>
      </section>

      {/* ----------------------- review section ------------------------- */}

      {/* ----------------------- blog section ------------------------- */}
      <section id="blog">
        <span className="blog-section-subtitle">آخرین اخبار</span>
        <h2 className="blog-section-title">
          آخرین مطالب وبلاگ را می‌توانید مشاهده نمایید
        </h2>
        {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و  */}

        <div className="blog-box-area">
          <BlogBox
            title="نحوه حذف اکانت اینستاگرام | روش تصویری"
            image="src/assets/blog1.jpg"
            author="فرید لطفی"
            authorImage="src/assets/avatar1.jpg"
            cat="مارکتینگ"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و"
            date="31 تیر"
          />
          <BlogBox
            title="نحوه نوشتن متا دسکریپشن کاربرپسند"
            image="src/assets/blog2.jpg"
            author="میلاد محمدی"
            authorImage="src/assets/avatar1.jpg"
            cat="سئو"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و"
            date="25 فروردین"
          />
          <BlogBox
            title="عنوان بلاگ"
            image="src/assets/blog1.jpg"
            author="فرید لطفی"
            authorImage="src/assets/avatar1.jpg"
            cat="مارکتینگ"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و"
            date="31 تیر"
          />
        </div>
      </section>

      {/* ----------------------- blog section ------------------------- */}

      {/* ----------------------- contact us section ------------------------- */}

      <section id="contact">
        <img src="src/assets/contact.png" className="homepage-contact-image" />
        <div className="contact-container">
          <div className="contact-data-form">
            <span className="contact-section-subtitle">ارتباط با ما</span>
            <h2>با استفاده از اطلاعات زیر با ما در ارتباط باشید</h2>

            <form>
              <input
                type="text"
                placeholder="اسم شما..."
                className="contact-name-input"
              />
              <input
                type="email"
                placeholder="آدرس ایمیل شما ..."
                className="contact-email-input"
              />
              <input
                type="tel"
                placeholder="شماره تماس ...."
                className="contact-tel-input"
              />
              <textarea
                cols="30"
                rows="10"
                className="contact-message-input"
                placeholder="متن پیغام شما..."
              ></textarea>
              <button className="contact-submit-button">ارسال</button>
            </form>
          </div>

          <div className="contact-ways">
            <IconBox
              icon="src/assets/code.svg"
              title="آدرس"
              desc="کردستان، مریوان، بلوار بعثت"
            />
            <IconBox
              icon="src/assets/pen.svg"
              title="شماره تماس"
              desc="09195399423"
            />
            <IconBox
              icon="src/assets/up.svg"
              title="ایمیل"
              desc="soafery@gmail.com"
            />
          </div>
        </div>
      </section>
      {/* ----------------------- contact us section ------------------------- */}




      {/* ----------------------- footer section ------------------------- */}
      <Footer />
      {/* ----------------------- footer section ------------------------- */}

      
    </>
  );
}
