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

                    {/* simple pagination  */}
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
                                class={`join-item btn btn-sm ${router?.query?.page === 2 ? "btn-active" : ""
                                    }`}
                            >
                                2
                            </button>
                        </div>
                    </div>
                    {/* pagination button end */}
                </div>
                <div>
                    <ProductCategories />
                    <NewProduct item={productList?.productData?.data} />
                    <div className="widget shop-widget mb-4">
                        <div className="shop-widget-title mb-2">
                            <h6 className="title">Sort Product</h6>
                        </div>
                        {/* filter by size */}
                        <div className="shop-sidebar-size">

                            <div className="shop-size-list">
                                <select onChange={(e) => {
                                    const path = router.pathname;
                                    const query = router.query;
                                    query.sortBy = 'createdAt';
                                    query.sortOrder = e.target.value;
                                    router.push({
                                        pathname: path,
                                        query: query,
                                    });
                                }} className="select-sm select select-primary w-full border-1 border-gray-500 ">
                                    <option disabled selected>SORT</option>
                                    <option value={"asc"}>ASC</option>
                                    <option value={"desc"}>DESC</option>

                                </select>
                            </div>
                        </div>


                        {/* filter by Price */}
                    </div>
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
