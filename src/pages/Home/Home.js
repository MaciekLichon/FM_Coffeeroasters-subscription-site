import PageHero from "../../components/sections/PageHero/PageHero";
import Collection from '../../components/sections/Collection/Collection';
import WhyUs from '../../components/sections/WhyUs/WhyUs';
import HowItWorks from '../../components/sections/HowItWorks/HowItWorks';

import bgHeroMobile from '../../assets/home/mobile/image-hero-coffeepress.jpg';
import bgHeroTablet from '../../assets/home/tablet/image-hero-coffeepress.jpg';
import bgHeroDesktop from '../../assets/home/desktop/image-hero-coffeepress.jpg';

const Home = () => {
    return (
        <>
            <PageHero title="Great coffee made simple."
                      text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
                      imageMob={bgHeroMobile}
                      imageTablet={bgHeroTablet}
                      imageDesktop={bgHeroDesktop}
                      btnText="Create your plan"
                      btnTo="/plan"
                      bigTitle={true} />
            <Collection />
            <WhyUs />
            <HowItWorks />
        </>
    );
};

export default Home;
