import './HowItWorks.scss';
import ListItem from '../../utils/ListItem/ListItem';
import ButtonMain from "../../utils/ButtonMain/ButtonMain";
import {howItWorksData} from "../../utils/howItWorksData";

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <h4 className="how-it-works__title">How it works</h4>
            <div className="how-it-works__list">
                {howItWorksData.map(item => (
                    <ListItem {...item} />
                ))}
            </div>
            <ButtonMain btnTo="/plan" btnText="Create your plan"/>
        </section>
    );
};

export default HowItWorks;
