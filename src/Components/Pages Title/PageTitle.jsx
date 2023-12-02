import "./PageTitle.css";


export default function PageTitle(params) {
    const {title, breadcrumb} = params;

    return(
        <div className="page-title-section">
            <h1 className="page-title">{title}</h1>
            <p className="page-breadcrumb">{breadcrumb}</p>
        </div>
    )
}
