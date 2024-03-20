import Image from "next/image";
import { Inter } from "next/font/google";
import ExclusiveItem from "@/components/Product";
import PageHeader from "@/components/PageHeader";
import ProductCategories from "@/components/ProductCategories";
import NewProduct from "@/components/NewProduct";
import FilterOption from "@/components/FilterOption";
import ImageWideget from "@/components/ImageWideget";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PageHeader />
    </main>
  );
}
