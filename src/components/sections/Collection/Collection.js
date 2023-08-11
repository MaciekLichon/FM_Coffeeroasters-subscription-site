import './Collection.scss';

import CollectionTitle from './CollectionTitle/CollectionTitle';
import CollectionItem from './CollectionItem/CollectionItem';

import imageEspresso from '../../../assets/home/desktop/image-gran-espresso.png';
import imagePlanalto from '../../../assets/home/desktop/image-planalto.png';
import imagePiccolo from '../../../assets/home/desktop/image-piccollo.png';
import imageDanche from '../../../assets/home/desktop/image-danche.png';

const collectionData = [
    {
        image: imageEspresso,
        title: 'Gran Espresso',
        text: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
    },
    {
        image: imagePlanalto,
        title: 'Planalto',
        text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    },
    {
        image: imagePiccolo,
        title: 'Piccollo',
        text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
    },
    {
        image: imageDanche,
        title: 'Danche',
        text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    }
];

const Collection = () => {
    return (
        <section className="collection">
            <CollectionTitle />
            <div className="collection__list">
                {collectionData.map(item => (
                    <CollectionItem {...item} />
                ))}
            </div>
        </section>
    );
};

export default Collection;
