import React from 'react';
import Link from 'next/link';

const NewProductCard = () => {
    return (
        <div className="new_product_card mb-3">
            <li>
                <div className="sidebar-product-thumb">
                    <Link href="#" passHref>
                        <img 
                            height="84"
                            width="95"
                            src="https://themebeyond.com/html/venam/img/product/sidebar_product01.jpg"
                            alt="" 
                        />
                    </Link>
                </div>
                <div className="sidebar-product-content">
                    <div className="rating">
                        <i className="fas fa-star  text-[#ee611c] text-[14px]"></i>
                        <i className="fas fa-star  text-[#ee611c] text-[14px]"></i>
                        <i className="fas fa-star  text-[#ee611c] text-[14px]"></i>
                        <i className="fas fa-star  text-gray-500 text-[14px]"></i>
                        <i className="fas fa-star  text-gray-500 text-[14px]"></i>
                    </div>
                    <h5>
                        <span>
                            Slim Fit Cotton
                        </span>
                    </h5>
                    <span>$ 39.00</span>
                </div>
            </li>
        </div>
    );
};

export default NewProductCard;
