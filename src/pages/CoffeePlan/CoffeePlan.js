import PageHero from '../../components/sections/PageHero/PageHero';
import Guide from '../../components/sections/Guide/Guide';
import CoffeeSelector from '../../components/sections/CoffeeSelector/CoffeeSelector';
import OrderSummary from '../../components/sections/OrderSummary/OrderSummary';

import bgHeroMobile from '../../assets/plan/mobile/image-hero-blackcup.jpg';

const CoffeePlan = () => {
    return (
        <>
            <PageHero title="Create a plan"
                      text="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
                      imageMob={bgHeroMobile}
                      bigTitle={true} />
            <Guide />
            <CoffeeSelector />
            <OrderSummary />
        </>
    );
};

export default CoffeePlan;
