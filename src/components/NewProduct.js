import React from 'react';
import NewProductCard from './NewProductCard';

const NewProduct = () => {
    return (
        <div className="widget shop-widget mb-4">
        <div className="shop-widget-title">
            <h6 className="title">NEW PRODUCT</h6>
        </div>
        {
            [...Array(4).keys()].map(item=>(
                <NewProductCard key={item} />
            ))
        }
    </div>
    );
};

export default NewProduct;