import MainLayout from '@/components/layout/MainLayout';
import { decrementQuantity, incrementQuantity } from '@/redux/slice/cartSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const router = useRouter();
    const cartData = useSelector((state) => state?.cartSlice);
    const dispatch = useDispatch();

    if (!localStorage.getItem('login')) {
        // Redirect to the login page
        router.replace('/login');
        return null; // Return null or a loading indicator until the redirect happens
    }

    if (cartData?.cart?.length <= 0) {
        return (
            <>
                <h1>Cart is empty :)</h1>
            </>
        );
    }

    const handlePurchase = () => {
        const payload = {
            customerId: "65fb0cd8cc3cf456fe79be61",
            products: cartData?.cart,
            paymentMethod: "ssl-commerce",
            totalPrice: 20,
            address: {
                _id: "65fb0cd8cc3cf456fe79be61",
            },
            shipping: cartData?.shipping
        };

        axios.post(`https://spart-spirit-shop-backend.vercel.app/api/v1/order/create`, payload)
            .then(data => {
                console.log(data);
                // Optionally, you can navigate to a success page after purchase
                router.push('/success');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='container lg:mx-auto px-3'>
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
            <button onClick={handlePurchase} className='bg-[#4144fa] text-white py-2 px-[100px] block ml-auto'>Purchase</button>
        </div>
    );
};

export default Index;

Index.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
