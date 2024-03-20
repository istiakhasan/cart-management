import { useGetAllProductsQuery } from '@/redux/api/productApi';
import React from 'react';

const ExclusiveItem = () => {
    return (
        <div className="exclusive-item exclusive-item-three text-center mb-50">
            <div className="exclusive-item-thumb">
                <a href="productDetails.html">
                    <img src="https://themebeyond.com/html/venam/img/product/t_exclusive_product01.jpg" alt="" />
                    <img className="overlay-product-thumb" src="https://themebeyond.com/html/venam/img/product/td_product_img01.jpg" alt="" />
                </a>
                <ul className="action">
                    <li className='cursor-pointer'><a><i className="fa-solid fa-shuffle"></i></a></li>
                    <li className='cursor-pointer' title='Add To Cart'><a><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li className='cursor-pointer'><a><i className="fa-regular fa-eye"></i></a></li>
                </ul>
            </div>
            <div className="exclusive-item-content">
                <h5 className="my-2"><a href="productDetails.html">Fashion Tops Juniors</a></h5>
                <div className="exclusive--item--price mb-2">
                    <del className="old-price text-secondary">$69.00</del>
                    <span className="new-price cm_color">$58.00</span>
                </div>
                <div className="rating">
                    <i className="fa-solid fa-star cm_color"></i>
                    <i className="fa-solid fa-star cm_color"></i>
                    <i className="fa-solid fa-star cm_color"></i>
                    <i className="fa-solid fa-star cm_color"></i>
                    <i className="fa-solid fa-star black_rating"></i>
                </div>
            </div>
        </div>
    );
}

export default ExclusiveItem;
