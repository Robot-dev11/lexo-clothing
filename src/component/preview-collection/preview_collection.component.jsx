import React from 'react';

import CollectionItem from '../collection-item/collection_item.component';
import './preview_collection.styles.scss';

const PreviewCollection = ({ title, items}) => (
    <div className="previewCollection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item, index) => index < 4)
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default PreviewCollection;