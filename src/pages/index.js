import Image from "next/image";
import { Inter } from "next/font/google";
import ExclusiveItem from "@/components/Product";
import PageHeader from "@/components/PageHeader";
import ProductCategories from "@/components/ProductCategories";
import NewProduct from "@/components/NewProduct";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PageHeader />
     <div className="container mx-auto">
     <div className="grid grid-cols-4">
       <div className="grid grid-cols-3 gap-4 col-span-3">
      {
        [...Array(9).keys()].map(item=>(
          <ExclusiveItem key={item} />
        ))
      }
     </div>
     <div>
      <ProductCategories />
      <NewProduct />
     </div>
       </div>
     </div>
    </main>
  );
}
