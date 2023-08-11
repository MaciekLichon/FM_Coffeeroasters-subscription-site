import './ListItem.scss';

const ListItem = ({number, title, text}) => {
    return (
        <div className="list-item">
            <p className="list-item__number accent-small">{number}</p>
            <h3 className="list-item__title">{title}</h3>
            <p className="list-item__text">{text}</p>
        </div>
    );
};

export default ListItem;
