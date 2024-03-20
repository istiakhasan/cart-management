import MainLayout from '@/components/layout/MainLayout';
import { decrementQuantity, incrementQuantity, removeToCart } from '@/redux/slice/cartSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Index = () => {
    const router = useRouter();
    const cartData = useSelector((state) => state?.cartSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('login')) {
            router.replace('/login');
        }
    }, []); // Empty dependency array to run only once on component mount

    if (!cartData) {
        // Handle loading state, assuming cartData might be null initially
        return <div>Loading...</div>;
    }

    if (cartData?.cart?.length <= 0) {
        return (
            <div className='min-h-[100vh] flex items-center justify-center'>
                <h1>Cart is empty :)</h1>
            </div>
        );
    }

    const handlePurchase = () => {
        const payload = {
            customerId: "65fb0cd8cc3cf456fe79be61",
            products: cartData?.cart,
            paymentMethod: "ssl-commerce",
            totalPrice: 20,
            address: {
                "_id": "65bf26d86c8d73b1a41d3ce5",
                "fulName": "Istiak hasan",
                "phone": "01873997166",
                "province": "asdf",
                "city": "asdfasf",
                "area": "asdf",
                "address": "asdf",
                "defaultDeliveryAddress": true,
                "userId": "65a78ab032af7c59746ba859",
                "createdAt": "2024-02-04T05:55:36.378Z",
                "updatedAt": "2024-02-04T05:55:36.378Z",
                "__v": 0,
                "id": "65bf26d86c8d73b1a41d3ce5"
              },
            shipping: cartData?.shipping
        };

        axios.post(`https://spart-spirit-shop-backend.vercel.app/api/v1/order/create`, payload)
            .then(data => {
                if(data?.data?.data?.url){
                    window.location.replace(data?.data?.data?.url)
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='container lg:mx-auto px-3 min-h-[100vh]'>
            {cartData?.cart?.map((item, i) => (
                <div key={item?._id} className="flex justify-between items-center gap-[10px] mb-[10px]">
                    <img
                        className="h-[60px] w-[60px] rounded-[3px]"
                        src={item?.image}
                        alt=""
                    />
                    <div className="cart_icon_hover_card_body">
                        <h2 className="text-[12px] mb-0">{item?.name?.length > 20 ? `${item?.name?.slice(0, 20)}...` : item?.name}</h2>
                        <p className="text-[14px] text-[#ee611c] mb-0">
                            ${item?.price} <del className="text-[10px] text-gray-500">${item?.previousPrice || 0}</del>
                        </p>
                        <p><small>Quantity: {item?.purchaseQuantity}</small></p>
                        <button onClick={() => dispatch(incrementQuantity({ _id: item?._id, index: i }))} className="btn btn-xs">+</button>
                        <button onClick={() => dispatch(decrementQuantity({ _id: item?._id, index: i }))} className="btn btn-xs">-</button>
                    </div>
                    <i onClick={() => dispatch(removeToCart(item))} className="fa fa-trash text-[red] cursor-pointer"></i>
                </div>
            ))}
            <div className="h-[1px] bg-gray-600"></div>
            <div className="flex justify-between items-center">
                <p>Quantity</p>
                <p>{cartData?.cart?.reduce((a, b) => a + b.purchaseQuantity, 0)}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Sub Total</p>
                <p>${cartData?.total}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Shipping Price</p>
                <p>${cartData?.shipping}</p>
            </div>
            <div className="flex justify-between items-center">
                <strong>Grand Total</strong>
                <strong>${cartData?.total + cartData?.shipping}</strong>
            </div>
            <button onClick={handlePurchase} className='bg-[#083DA0] text-white py-2 px-[100px] block ml-auto'>Purchase</button>
        </div>
    );
};

export default Index;

Index.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
