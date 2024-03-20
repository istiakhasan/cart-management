import FilterOption from '@/components/FilterOption';
import ImageWideget from '@/components/ImageWideget';
import Navbar from '@/components/Navbar';
import HeaderComponent from '@/components/Navbar';
import NewProduct from '@/components/NewProduct';
import PageHeader from '@/components/PageHeader';
import Product from '@/components/Product';
import ProductCategories from '@/components/ProductCategories';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import Head from 'next/head';
const Index = () => {
    const {data}=useGetAllProductsQuery(undefined)
    const productData=data?.data
    console.log(data,"data");
    return (
        <>
        <Head>
            <title>Shop</title>
        </Head>
        <Navbar />
        <PageHeader pageTitle={"Shop"} />
        <div className="container mx-auto">
        <div className="lg:grid grid-cols-4 gap-4">
          <div className="lg:grid grid-cols-3 gap-4 col-span-3">
            {productData?.map((product) => (
              <Product key={product?._id} product={product} />
            ))}
          </div>
          <div>
            <ProductCategories />
            <NewProduct />
            <FilterOption />
            <ImageWideget />
          </div>
        </div>
      </div>
      </>
    );
};

export default Index;