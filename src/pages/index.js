import Image from "next/image";
import { Inter } from "next/font/google";
import ExclusiveItem from "@/components/Product";
import PageHeader from "@/components/PageHeader";

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
     <div></div>
       </div>
     </div>
    </main>
  );
}
