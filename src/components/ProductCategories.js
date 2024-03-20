import Link from 'next/link';

const ProductCategories = () => {
    return (
        <div className="widget shop-widget mb-4">
            <div className="shop-widget-title">
                <h6 className="title">Product Categories</h6>
            </div>
            <div className="shop-cat-list">
                <ul>
                    <li><Link href="#">Accessories</Link><span>27</span></li>
                    <li className="active"><Link href="#">Leather Jacket</Link><span>12</span></li>
                    <li><Link href="#">Woman Hoodies</Link><span>6</span></li>
                    <li><Link href="#">Man Shoes</Link><span>7</span></li>
                    <li><Link href="#">Baby Troys</Link><span>9</span></li>
                    <li><Link href="#">Kitchen Accessories</Link><span>16</span></li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCategories;
