import React from "react";

 import CollectionItem from "../collection_items/collectionitems.jsx";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview container-fluid my-3 mx-3 mb-3">
    <h1 className="title ">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
