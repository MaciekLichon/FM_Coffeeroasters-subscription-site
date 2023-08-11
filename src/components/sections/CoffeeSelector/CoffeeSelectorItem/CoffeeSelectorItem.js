import './CoffeeSelectorItem.scss';
import iconArrow from '../../../../assets/plan/desktop/icon-arrow.svg';

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateOrder, getOrder} from '../../../../redux/orderRedux';

const CoffeeSelectorItem = ({question, answers, name}) => {

    const dispatch = useDispatch();
    const order = useSelector(getOrder);
    const [open, setOpen] = useState(false);

    const selectValue = e => {
        const value = e.currentTarget.value;
        const category = e.currentTarget.name;
        dispatch(updateOrder({category, value}));
    }

    return (
        <div className="selector__item">
            <button className="selector__item-header" onClick={() => setOpen(!open)}>
                <h2 className="selector__item-title">{question}</h2>
                <img src={iconArrow} alt="icon arrow" className={`selector__item-icon ${open ? 'selector__item-icon_open' : ''}`}/>
            </button>
            <div className={`selector__item-answersContainer ${open ? 'selector__item-answersContainer_open' : ''}`}>
                <div className="selector__item-list">
                    {answers.map(item => (
                        <button className={`selector__item-answer ${order[name] === item.title ? 'selector__item-answer_selected' : ''}`}
                                value={item.title}
                                name={name}
                                onClick={selectValue}>
                            <h4 className="selector__item-answerTitle">{item.title}</h4>
                            <p className="selector__item-answerText">{item.text}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoffeeSelectorItem;
