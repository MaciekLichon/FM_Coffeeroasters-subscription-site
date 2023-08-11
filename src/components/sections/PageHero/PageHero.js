import './PageHero.scss';

import ButtonMain from '../../utils/ButtonMain/ButtonMain';

const PageHero = ({title, text, imageMob, imageTablet, imageDesktop, btnText, btnTo, bigTitle}) => {
    return (
        <section className="hero">
            <picture className="hero__background">
                <source media="(min-width:1024px)" srcSet={imageDesktop}/>
                <source media="(min-width:768px)" srcSet={imageTablet}/>
                <img src={imageMob} alt="bg" className="hero__background"/>
            </picture>
            <div className="hero__content">
                {bigTitle ?
                    <h1 className="hero__title">{title}</h1> :
                    <h2 className="hero__title">{title}</h2>
                }
                <p className="hero__text">{text}</p>
                {btnTo &&
                    <ButtonMain btnTo={btnTo} btnText={btnText} classes="hero__btn" />
                }
            </div>
        </section>
    );
};

export default PageHero;
