/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const NewProductCard = ({product}) => {
    return (
        <div className="new_product_card mb-3">
            <li>
                <div className="sidebar-product-thumb">
                    <Link href="#" passHref>
                        <img 
                            height="84"
                            width="60"
                            src={product?.image}
                            alt="" 
                        />
                    </Link>
                </div>
                <div className="sidebar-product-content">
                    <div className="rating">
                        <i className="fas fa-star  text-[#ee611c] text-[12px]"></i>
                        <i className="fas fa-star  text-[#ee611c] text-[12px]"></i>
                        <i className="fas fa-star  text-[#ee611c] text-[12px]"></i>
                        <i className="fas fa-star  text-gray-500 text-[12px]"></i>
                        <i className="fas fa-star  text-gray-500 text-[12px]"></i>
                    </div>
                    <h5 style={{marginBottom:"0"}} >
                        <small>
                           {product?.name?.length>20?`${product?.name?.slice(0,10)}...`:product?.name}
                        </small>
                    </h5>
                    <small className='text-[12px] text-[#ee611c]'>$ {product.price}</small>
                </div>
            </li>
        </div>
    );
};

export default NewProductCard;
