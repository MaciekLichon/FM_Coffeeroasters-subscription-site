import './WhyUs.scss';
import WhyUsItem from './WhyUsItem/WhyUsItem';

import iconBean from '../../../assets/home/desktop/icon-coffee-bean.svg';
import iconGift from '../../../assets/home/desktop/icon-gift.svg';
import iconTruck from '../../../assets/home/desktop/icon-truck.svg';

const whyUsData = [
    {
        icon: iconBean,
        title: 'Best quality',
        text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
    },
    {
        icon: iconGift,
        title: 'Exclusive benefits',
        text: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
        icon: iconTruck,
        title: 'Free shipping',
        text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    }
]

const WhyUs = () => {
    return (
        <section className="why-us">
            <h2 className="why-us__title">Why choose us?</h2>
            <p className="why-us__text">
                A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
            </p>
            <div className="why-us__list">
                {whyUsData.map(item => (
                    <WhyUsItem {...item} />
                ))}
            </div>
        </section>
    );
};

export default WhyUs;
