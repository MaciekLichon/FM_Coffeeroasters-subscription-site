import './Guide.scss';

import ListItem from '../../utils/ListItem/ListItem';
import {howItWorksData} from "../../utils/howItWorksData";


const Guide = () => {
    return (
        <section className="guide">
            {howItWorksData.map(item => (
                <ListItem {...item} />
            ))}
        </section>
    );
};

export default Guide;
