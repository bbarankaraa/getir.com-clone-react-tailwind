import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Products = ({ selectedCategory, selectedProducts, setSelectedProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory?.products) {
      setProducts(selectedCategory.products);
    }
  }, [selectedCategory]);

  const addToBasket = (product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      setSelectedProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id
          ? { ...p, quantity: Math.max(p.quantity - 1, 0) }
          : p
      )
    );
  };

  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
      {selectedCategory ? (
        products.length > 0 ? (
          products.map((product) => {
            const existingProduct = selectedProducts.find(
              (p) => p.id === product.id
            );
            const quantity = existingProduct ? existingProduct.quantity : 0;

            return (
              <div
                className="flex flex-col justify-center items-center bg-white text-center py-4 px-1 relative"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-24 w-24"
                />
                <h3 className="text-brand-color font-semibold text-sm">
                  ₺{product.price}
                </h3>
                <h3 className="text-sm my-1">{product.title}</h3>
                <div className="absolute top-2 right-2 text-brand-color bg-white shadow rounded-lg border border-gray-300">
                  <div className="flex items-center">
                    {quantity >= 1 && (
                      <>
                        <button
                          className="p-1 cursor-pointer"
                          onClick={() => decreaseQuantity(product)}
                        >
                          <FaMinus />
                        </button>
                        <span className="mx-2">{quantity}</span>
                      </>
                    )}
                    <div
                      className="text-brand-color p-1 cursor-pointer"
                      onClick={() => addToBasket(product)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">Kategori seçiniz</p>
        )
      ) : (
        <p className="text-center">Kategori seçin</p>
      )}
    </div>
  );
};

export default Products;