import Basket from "./shop/Basket";
import CategoryList from "./shop/CategoryList";
import Products from "./shop/Products";
import { useState } from "react";

const Shop = () => {
  
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="lg:grid lg:grid-cols-12 2xl:px-36 xl:px-24 lg:px-8 lg:mt-8">
      <div className="lg:col-span-3">
        <h3 className="mb-2 font-semibold lg:block hidden">Kategoriler</h3>
        <CategoryList setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="lg:col-span-6 lg:px-0 px-8">
        <h3 className="mb-2 font-semibold">Ürünler</h3>
        <Products
          selectedCategory={selectedCategory}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </div>
      <div className="lg:col-span-3 lg:block lg:relative sticky bottom-0 right-0">
        <h3 className="hidden lg:block mb-2 font-semibold">Sepetim</h3>
          <Basket selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
      </div>
    </div>
  );
};

export default Shop;
