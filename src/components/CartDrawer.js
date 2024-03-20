import { decrementQuantity, incrementQuantity, removeToCart } from "@/redux/slice/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartDrawer = () => {
    const cartData = useSelector((state) => state?.cartSlice);
    const dispatch=useDispatch()
    console.log(cartData,"cart");
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-6 w-80 min-h-full bg-base-200 text-base-content">
            {
                cartData?.cart?.map((item,i)=>(
                    <div key={item?._id} className="flex justify-between items-center gap-[10px] mb-[10px]">
                    <img 
                      className="h-[60px] w-[60px] rounded-[3px]"
                      src={item?.image}
                      alt=""
                    />
                    <div class="cart_icon_hover_card_body">
                      <h2 className="text-[12px] mb-0">{item?.name?.length>20?`${item?.name?.slice(0,20)}...`:item?.name}</h2>
                      <p className="text-[14px] text-[#ee611c] mb-0">
                        ${item?.price} <del className="text-[10px] text-gray-500">${item?.previousPrice || 0}</del>
                      </p>
                      <p><small>Quantity: {item?.purchaseQuantity}</small></p>
                      <button onClick={()=>dispatch(incrementQuantity({_id:item?._id,index:i}))} className="btn btn-xs">+</button>
                      <button onClick={()=>dispatch(decrementQuantity({_id:item?._id,index:i}))} className="btn btn-xs">-</button>
                    </div>
                    <i onClick={()=>dispatch(removeToCart(item))} class="fa fa-trash text-[red] cursor-pointer"></i>
                  </div>
                ))
            }
             <div className="flex justify-between items-center">
            <p>Quantity</p>
            <p>{cartData?.cart?.reduce((a,b)=>a+b.purchaseQuantity,0)}</p>
         </div>
             <div className="flex justify-between items-center">
            <p>Sub Total</p>
            <p>${cartData?.total}</p>
         </div>
             <div className="flex justify-between items-center">
            <p>Shipping Price</p>
            <p>${cartData?.shipping}</p>
         </div>
         <div className="h-[1px] bg-gray-600"></div>
         <div className="flex justify-between items-center">
            <strong>Grand Total</strong>
            <strong>${cartData?.total+cartData?.shipping}</strong>
         </div>
         <button className="bg-[#C0330C] text-white text-[12px] uppercase py-2 rounded-[5px] mt-3">Checkout</button>
        </ul>

         
      </div>
    </div>
  );
};

export default CartDrawer;
