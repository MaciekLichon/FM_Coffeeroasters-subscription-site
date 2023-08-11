import './WhyUsItem.scss';

const WhyUsItem = ({icon, title, text }) => {
    return (
        <div className="why-us__item">
            <div className="why-us__item-icon">
                <img src={icon} alt="icon"/>
            </div>
            <div className="why-us__item-content">
                <h4 className="why-us__item-title">{title}</h4>
                <p className="why-us__item-text">{text}</p>
            </div>
        </div>
    );
};

export default WhyUsItem;
