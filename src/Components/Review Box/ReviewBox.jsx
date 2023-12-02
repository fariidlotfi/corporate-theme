import "./ReviewBox.css";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default function ReviewBox() {
  return (
    <div className="review-box">
      <p className="review-type">خدمات مشتریان</p>
      <div className="review-stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon />
      </div>
      <p className="review-content">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <hr />
      <div className="review-avatar">
        <img src="src/assets/review.jpg" className="review-avatar-img" />
        <FormatQuoteIcon className="review-quote-icon" />
      </div>
      <p className="review-name">فرید لطفی</p>
      <p className="review-role">برنامه‌نویس</p>
    </div>
  );
}
