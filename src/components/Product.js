import { useGetAllProductsQuery } from '@/redux/api/productApi';
import React from 'react';

const Product = ({product}) => {
    return (
        <div className="exclusive-item exclusive-item-three text-center mb-50">
            <div className="exclusive-item-thumb">
                <a href="productDetails.html">
                    <img src={product?.image} alt="" />
                    <img className="overlay-product-thumb" src={product?.image} alt="" />
                </a>
                <ul className="action">
                    <li className='cursor-pointer'><a><i className="fa-solid fa-shuffle"></i></a></li>
                    <li className='cursor-pointer' title='Add To Cart'><a><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li className='cursor-pointer'><a><i className="fa-regular fa-eye"></i></a></li>
                </ul>
            </div>
            <div className="exclusive-item-content">
                <h5 className="my-2"><a href="productDetails.html">$ {product?.name?.length<30?product?.name:`${product?.name?.slice(0,30)}...`}</a></h5>
                <div className="exclusive--item--price mb-2">
                    <del className="old-price text-gray-500">${product?.previous_price || "0.00"}</del>
                    <span className="new-price cm_color">${product?.price}</span>
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

export default Product;
