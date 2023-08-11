import './CollectionItem.scss';

const CollectionItem = ({image, title, text}) => {
    return (
        <div className="collection__item">
            <img src={image} alt="item preview" className="collection__item-image"/>
            <div className="collection__item-content">
                <h4 className="collection__item-title">{title}</h4>
                <p className="collection__item-text">{text}</p>
            </div>
        </div>
    );
};

export default CollectionItem;
