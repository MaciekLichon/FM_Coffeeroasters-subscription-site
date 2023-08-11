import './HeadquartersItem.scss';

const HeadquartersItem = ({icon, name, address}) => {
    return (
        <div className="headquarters__item">
            <img src={icon} alt="icon" className="headquarters__item-icon"/>
            <h3 className="headquarters__item-title">{name}</h3>
            {address.map(item => (
                <p className="headquarters__item-text">{item}</p>
            ))}
        </div>
    );
};

export default HeadquartersItem;
