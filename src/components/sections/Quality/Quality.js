import './Quality.scss';

import imageMob from '../../../assets/about/mobile/image-quality.jpg';
import bgMob from '../../../assets/about/mobile/bg-quality.png';

const Quality = () => {
    return (
        <section className="quality">
            <div className="quality__image">
                <img src={imageMob} alt="quality image"/>
            </div>
            <div className="quality__content">
                <img src={bgMob} alt="quality bg" className="quality__bg"/>
                <div className="quality__details">
                    <h2 className="quality__title">Uncompromising quality</h2>
                    <p className="quality__text">
                        Although we work with growers who pay close attention to all stages of harvest and processing, we
                        employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee
                        dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                        consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Quality;
