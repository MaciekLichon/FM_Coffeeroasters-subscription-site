import './Headquarters.scss';
import HeadquartersItem from './HeadquartersItem/HeadquartersItem';

import iconUK from '../../../assets/about/desktop/illustration-uk.svg';
import iconCanada from '../../../assets/about/desktop/illustration-canada.svg';
import iconAustralia from '../../../assets/about/desktop/illustration-australia.svg';

const headquartersData = [
    {
        icon: iconUK,
        name: 'United Kingdom',
        address: ['68 Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425']
    },
    {
        icon: iconCanada,
        name: 'Canada',
        address: ['1528 Eglinton Avenue', 'Toronto', 'Ontario M4P 1A6', '+1 416 485 2997']
    },
    {
        icon: iconAustralia,
        name: 'Australia',
        address: ['36 Swanston Street', 'Kewell', 'Victoria', '+61 4 9928 3629']
    }
]

const Headquarters = () => {
    return (
        <section className="headquarters">
            <h4 className="headquarters__title">Our headquarters</h4>
            <div className="headquarters__list">
                {headquartersData.map(item => (
                    <HeadquartersItem {...item} />
                ))}
            </div>
        </section>
    );
};

export default Headquarters;
