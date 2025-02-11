import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { IoIosClose } from "react-icons/io";
import { useState, useEffect } from "react";

const Basket = ({ selectedProducts, setSelectedProducts }) => {
  const [toastAlert, setToastAlert] = useState(false);
  useEffect(() => {
    if (toastAlert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toastAlert]);

  let totalPrice = 0;

  const increaseQuantity = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="h-auto lg:border-2 lg:border-brand-yellow lg:rounded-lg lg:px-6 lg:pb-6 pt-2 lg:shadow-sm">
      <div className="flex flex-col justify-center h-full lg:min-h-[330px]">
        {selectedProducts.length === 0 ? (
          <div className="hidden lg:flex justify-center items-center flex-col h-full text-center">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              alt="basket"
            />
            <h3 className="text-brand-color font-semibold mb-3 pt-12">
              Sepetin şu an boş
            </h3>
            <p className="text-sm text-paragraph">
              Sipariş vermek için sepetine ürün ekle
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            {selectedProducts.map((product) => (
              <div
                className="hidden lg:flex justify-between items-center py-4"
                key={product.id}
              >
                <div className="flex flex-col">
                  <div className="text-paragraph">{product.title}</div>
                  <div className="text-brand-color font-semibold">
                    ₺{product.price}
                  </div>
                </div>
                <div className="flex gap-3 justify-center items-center bg-white m-1 px-2 rounded-lg border border-gray-200 shadow">
                  {/* Ürünü silme butonu */}
                  {product.quantity === 1 && (
                    <div
                      className="text-lg cursor-pointer text-brand-color flex justify-center items-center"
                      onClick={() => removeProduct(product.id)}
                    >
                      <FaRegTrashAlt />
                    </div>
                  )}
                  {product.quantity > 1 && (
                    <div
                      className="text-lg cursor-pointer text-brand-color flex justify-center items-center"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      <FaMinus />
                    </div>
                  )}
                  <div className="bg-brand-color text-white py-2 px-3 flex justify-center items-center">
                    {product.quantity}
                  </div>
                  {/* Quantity artırma butonu */}
                  <div
                    className="text-lg cursor-pointer text-brand-color flex justify-center items-center"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    <FaPlus />
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white flex justify-between items-center rounded-lg border-2 border-brand-color">
              <button
                className="bg-brand-color text-white px-4 py-3.5 rounded-l-lg grow cursor-pointer hover:bg-primary-color duration-300"
                onClick={() => {
                  setToastAlert(true);
                }}
              >
                Sipariş Ver
              </button>
              {selectedProducts.map((product) => {
                totalPrice += product.quantity * product.price;
              })}
              <h3 className="px-6 text-brand-color">
                ₺{totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </div>
      {toastAlert ? (
        <div className="fixed top-0 right-0 min-h-full min-w-full bg-gray-400/50 flex justify-center items-center">
          <div className="bg-white rounded-lg flex items-center justify-center flex-col gap-5 lg:p-10 p-5 relative shadow-2xl">
            <IoIosClose
              size={30}
              className="absolute top-2 right-2 bg-brand-color text-white rounded-full hover:bg-gray-300 duration-300 cursor-pointer"
              onClick={() => {
                setToastAlert(false);
                setSelectedProducts([]);
              }}
            />
            <SiTicktick size={120} className="text-brand-color" />
            <h3 className="lg:text-2xl text-brand-color font-semibold">
              Siparişiniz Verildi. 30 Dakikada Kapınızda!
            </h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Basket;
