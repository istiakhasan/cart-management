import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import CartDrawer from "./CartDrawer";
import { useRouter } from "next/router";

const Navbar = () => {
  const cartData = useSelector((state) => state?.cartSlice);
  const roter=useRouter()
  const MenuLink = (
    <>
      <li>
        <Link href={"/"} className="uppercase">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/"} className="uppercase">
          Shop
        </Link>
      </li>
      <li>
        <Link href={"/"} className="uppercase">
          About Us
        </Link>
      </li>
      <li>
        <Link href={"/"} className="uppercase">
          Contact
        </Link>
      </li>
      <li>
       {
        !!localStorage.getItem('login') ? <a onClick={()=>{
        localStorage.removeItem('login')
        roter.replace('/')
       }}>Logout</a>: <Link href={"/login"} className="uppercase">
          Login
        </Link>}
      </li>
      <li>
        <label htmlFor="my-drawer-4">
          <i className="fa-solid fa-cart-shopping text-[#EE611C] text-[18px] cursor-pointer"></i>
          <div className="badge badge-secondary bg-[#DC3545] badge-xs">
            {cartData?.cart?.length < 9
              ? `${cartData?.cart?.length}`
              : `+${cartData?.cart?.length}`}
          </div>
        </label>
      </li>
    </>
  );
  return (
    <div className="bg-[#083DA0] sticky top-0 z-[2]">
    
    <CartDrawer />
      <div className="container mx-auto ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {MenuLink}
              </ul>
            </div>
            <Link href={"/"} className="btn btn-ghost text-xl text-white">
              Super Shop
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{MenuLink}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
