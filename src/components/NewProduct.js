import React from 'react';
import NewProductCard from './NewProductCard';

const NewProduct = ({item}) => {
    return (
        <div className="widget shop-widget mb-4">
        <div className="shop-widget-title">
            <h6 className="title">NEW PRODUCT</h6>
        </div>
        {
            item?.slice(0,4)?.map(prodct=>(
                <NewProductCard key={prodct._id} product={prodct} />
            ))
        }
    </div>
    );
};

export default NewProduct;