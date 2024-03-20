import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import MainLayout from '@/components/layout/MainLayout';
import ProductList from '@/components/productlist/ProductList';
import Head from 'next/head';
const Index = (props) => {
    return (
        <>
        <Head>
            <title>Shop</title>
        </Head>
        <PageHeader pageTitle={"Shop"} />
        <ProductList data={props} />
      </>
    );
};

export default Index;


export async function getServerSideProps({query}) {
    const page=query.page || 1 
    console.log(query.page,query);
  let productData=null
  const res = await fetch(`https://spart-spirit-shop-backend.vercel.app/api/v1/product/all-products?page=${page}`)
   productData = await res.json()
  return { props: { productData } }
}

Index.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };