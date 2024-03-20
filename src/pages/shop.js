import FilterOption from '@/components/FilterOption';
import ImageWideget from '@/components/ImageWideget';
import NewProduct from '@/components/NewProduct';
import ExclusiveItem from '@/components/Product';
import ProductCategories from '@/components/ProductCategories';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
const Index = () => {
    const {data}=useGetAllProductsQuery(undefined)
    return (
        <div className="container mx-auto">
        <div className="lg:grid grid-cols-4 gap-4">
          <div className="lg:grid grid-cols-3 gap-4 col-span-3">
            {[...Array(9).keys()].map((item) => (
              <ExclusiveItem key={item} />
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
    );
};

export default Index;