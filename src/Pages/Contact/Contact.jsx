import NavBar from "../../Components/NavBar/MidNavBar";
import PageTitle from "../../Components/Pages Title/PageTitle";
import IconBox from "../../Components/Icon Box With Desc/IconBox.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


export default function Contact() {
    
    return(
        <>
        <NavBar sticky="true" />
        <PageTitle title="تماس با ما" breadcrumb="خانه -> تماس با ما"/>

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

      <Footer />

        </>
    );

}
