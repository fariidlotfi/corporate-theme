import "./IconBox.css"

export default function IconBox(params) {
    const {image} = params;
    
    return(
        <div className="box-icon">
            <img src={image} width="90%" />
        </div>
    );
}
