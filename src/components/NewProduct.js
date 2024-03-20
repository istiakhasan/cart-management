import React from 'react';
import NewProductCard from './NewProductCard';

const NewProduct = () => {
    return (
        <div class="widget shop-widget mb-4">
        <div class="shop-widget-title">
            <h6 class="title">NEW PRODUCT</h6>
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