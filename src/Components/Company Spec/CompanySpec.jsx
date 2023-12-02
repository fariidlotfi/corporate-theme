import './CompanySpec.css';
import CheckIcon from '@mui/icons-material/Check';

export default function CompanySpec(params) {
    const {title, desc} = params;

    return(
        <div className='company-spec-box'>
            <CheckIcon className='company-spec-icon'/>

            <div className='company-spec-texts'>
                <span className='company-spec-title'>{title}</span>
                <p className='company-spec-desc'>{desc}</p>
            </div>
        </div>
    );
}