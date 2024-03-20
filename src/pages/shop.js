import FilterOption from '@/components/FilterOption';
import ImageWideget from '@/components/ImageWideget';
import LoaderComponent from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeaderComponent from '@/components/Navbar';
import NewProduct from '@/components/NewProduct';
import PageHeader from '@/components/PageHeader';
import Product from '@/components/Product';
import ProductCategories from '@/components/ProductCategories';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
const Index = (props) => {
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
            {props?.productData?.data?.map((product) => (
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
        <Toaster />
        <LoaderComponent />
      </div>
      </>
    );
};

export default Index;


export async function getServerSideProps() {
  const res = await fetch('https://spart-spirit-shop-backend.vercel.app/api/v1/product/all-products')
  const productData = await res.json()
  return { props: { productData } }
}