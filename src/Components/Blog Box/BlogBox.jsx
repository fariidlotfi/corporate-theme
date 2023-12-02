import "./BlogBox.css";

export default function BlogBox(params) {

  const {title, image, author, authorImage, cat, desc, date} = params;

  return (
    <div className="blog-box">
      <p className="blog-date">{date}</p>

      <img src={image} className="blog-image" />

      <div className="blog-data">
        <h2 className="blog-title">{title}</h2>

        <div className="blog-extra-info">
          <img src={authorImage} className="blog-extra-avatar" />
          <p className="blog-extra-by">توسط: </p>
          <p className="blog-extra-name">{author}</p>
          <hr className="blog-hr" />
          <p className="blog-extra-in">در</p>
          <p className="blog-extra-cat">{cat}</p>
        </div>

        <p className="blog-extra-desc">
          {desc}
        </p>
      </div>
    </div>
  );
}
