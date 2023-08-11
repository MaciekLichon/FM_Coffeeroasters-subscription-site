import './CoffeeSelector.scss';
import {coffeeSelectorData} from '../../utils/coffeeSelectorData';

import CoffeeSelectorItem from './CoffeeSelectorItem/CoffeeSelectorItem';

const CoffeeSelector = () => {
    return (
        <section className="selector">
            {coffeeSelectorData.map(item => (
                <CoffeeSelectorItem {...item} />
            ))}
        </section>
    );
};

export default CoffeeSelector;
