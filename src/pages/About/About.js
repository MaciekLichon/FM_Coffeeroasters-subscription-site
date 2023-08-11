import PageHero from '../../components/sections/PageHero/PageHero';
import Quality from '../../components/sections/Quality/Quality';
import Commitment from '../../components/sections/Commitment/Commitment';
import Headquarters from '../../components/sections/Headquarters/Headquarters';

import bgHeroMobile from '../../assets/about/mobile/image-hero-whitecup.jpg';

const About = () => {
    return (
        <>
            <PageHero title="About Us"
                      text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
                      imageMob={bgHeroMobile}
                      bigTitle={false} />
            <Commitment />
            <Quality />
            <Headquarters />
        </>
    );
};

export default About;
