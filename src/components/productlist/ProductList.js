import React, { useEffect, useState } from "react";
import Product from "../Product";
import ProductCategories from "../ProductCategories";
import NewProduct from "../NewProduct";
import FilterOption from "../FilterOption";
import ImageWideget from "../ImageWideget";
import { Toaster } from "react-hot-toast";
import LoaderComponent from "../Loader";
import { useRouter } from "next/router";

const ProductList = ({ data }) => {
  const [productList, setProductList] = useState([]);

  const router = useRouter();
  console.log(router.query);
  useEffect(() => {
    if (data?.error) {
    } else {
      setProductList(data);
    }
  }, [data]);
  const handleChangeThePage = (pagenmbr) => {
    const path = router.pathname;
    const query = router.query;
    query.page = pagenmbr;
    router.push({
      pathname: path,
      query: query,
    });
  };
  return (
    <div className="container mx-auto">
      <div className="lg:grid grid-cols-4 gap-4">
        <div className="lg:grid grid-cols-3 gap-4 col-span-3">
          {productList?.productData?.data?.map((product) => (
            <Product key={product?._id} product={product} />
          ))}
          <div className="col-span-3 my-5 flex justify-center h-[fitContent] ">
            <div class="join ">
              <button
                onClick={() => handleChangeThePage(1)}
                class="join-item btn btn-sm"
              >
                1
              </button>
              <button
                onClick={() => handleChangeThePage(2)}
                class={`join-item btn btn-sm ${
                  router?.query?.page === 2 ? "btn-active" : ""
                }`}
              >
                2
              </button>
            </div>
          </div>
        </div>
        <div>
          <ProductCategories />
          <NewProduct />
          <FilterOption />
          <ImageWideget />
        </div>
      </div>

      <Toaster />
      <LoaderComponent />
    </div>
  );
};

export default ProductList;
