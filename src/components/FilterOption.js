import Link from "next/link";
import React from "react";

const FilterOption = () => {
  return (
    <div class="widget shop-widget mb-4">
      <div class="shop-widget-title">
        <h6 class="title">Filter Option</h6>
      </div>
      {/* filter by size */}
      <div class="shop-sidebar-size">
        <div class="shop-widget-title mt-3">
          <h6 class="title">Size</h6>
        </div>
        <div class="shop-size-list">
          <ul className="flex items-center flex-wrap">
            <li class="active">
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
      <div class="shop-sidebar-size mt-5">
        <div class="shop-widget-title mt-3">
          <h6 class="title">Color</h6>
        </div>
        <div class="shop-size-list">
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
