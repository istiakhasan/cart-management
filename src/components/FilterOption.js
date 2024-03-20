import Link from "next/link";
import React from "react";

const FilterOption = () => {
  return (
    <div className="widget shop-widget mb-4">
      <div className="shop-widget-title">
        <h6 className="title">Filter Option</h6>
      </div>
      {/* filter by size */}
      <div className="shop-sidebar-size">
        <div className="shop-widget-title mt-3">
          <h6 className="title">Size</h6>
        </div>
        <div className="shop-size-list">
          <ul className="flex items-center flex-wrap">
            <li className="active">
              <Link href="#">S</Link>
            </li>
            <li>
              <Link href="#">M</Link>
            </li>
            <li>
              <Link href="#">L</Link>
            </li>
            <li>
              <Link href="#">XL</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* filter by color */}
      <div className="shop-sidebar-size mt-5">
        <div className="shop-widget-title mt-3">
          <h6 className="title">Color</h6>
        </div>
        <div className="shop-size-list">
          <ul className="flex items-center flex-wrap">
            <li>
              <span className="h-[30px] w-[30px] rounded-full bg-[#555c82]"></span>
            </li>
            <li>
              <span className="h-[30px] w-[30px] rounded-full bg-[#55b69a]"></span>
            </li>
            <li>
              <span className="h-[30px] w-[30px] rounded-full bg-[#669db8]"></span>
            </li>
            <li>
              <span className="h-[30px] w-[30px] rounded-full bg-[#d74987]"></span>
            </li>
          </ul>
        </div>
      </div>
      {/* filter by Price */}
    </div>
  );
};

export default FilterOption;
