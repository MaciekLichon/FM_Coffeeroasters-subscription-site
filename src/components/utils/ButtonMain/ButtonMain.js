import './ButtonMain.scss';
import {Link} from "react-router-dom";

const ButtonMain = ({btnTo, btnText, classes}) => {
    return (
        <Link to={btnTo} className={`btn-main ${classes ? classes : ''}`}>{btnText}</Link>
    );
};

export default ButtonMain;
