import './OrderSummary.scss';

import {useSelector} from 'react-redux';
import {getOrder} from '../../../redux/orderRedux';

import ButtonMain from '../../utils/ButtonMain/ButtonMain';
const OrderSummary = () => {

    const order = useSelector(getOrder);

    return (
        <section className="summary">
            <div className="summary__content">
                <p className="summary__title">Order summary</p>
                <h4 className="summary__text">
                    “I drink my coffee as <span className="summary__text-accent">{order.drink}</span>, with a <span
                    className="summary__text-accent">{order.coffee}</span> type of bean. <span
                    className="summary__text-accent">{order.weight}</span> ground ala <span
                    className="summary__text-accent">{order.grind}</span>, sent to me <span className="summary__text-accent">{order.delivery}</span>.”
                </h4>
            </div>
            <ButtonMain btnTo="/" btnText="Create my plan!" classes="summary__btn"/>
        </section>
    );
};

export default OrderSummary;
