import NavBar from "../../Components/NavBar/MidNavBar";
import PageTitle from "../../Components/Pages Title/PageTitle";
import Footer from "../../Components/Footer/Footer";
import BlogBox from "../../Components/Blog Box/BlogBox";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <NavBar sticky="true" />
      <PageTitle title="مطالب آموزشی" breadcrumb="خانه -> وبلاگ" />

      <section id="blog-section">
        <span className="blog-section-subtitle">آخرین اخبار</span>
        <h2 className="blog-section-title">
          آخرین مطالب وبلاگ را می‌توانید مشاهده نمایید
        </h2>

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
      <Footer />
    </>
  );
}
