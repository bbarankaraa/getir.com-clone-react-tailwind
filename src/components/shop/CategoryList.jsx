import CategoryData from "../../api/categories.json";
import { useState, useEffect } from "react";

const CategoryList = ({ setSelectedCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(CategoryData);
  }, []);

  return (
    <div className="lg:w-[240px] lg:overflow-hidden overflow-x-auto lg:my-0 my-3">
      <div className="lg:py-2 flex lg:flex-col flex-row lg:bg-white bg-brand-color lg:rounded-lg">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="flex items-center lg:py-1 lg:px-3 px-2 py-3 lg:gap-4 cursor-pointer whitespace-nowrap lg:text-black text-white bg-brand-color lg:bg-white hover:bg-white hover:text-brand-color duration-300"
            onClick={() => setSelectedCategory(category)}
          >
            <img
              src={category.image}
              alt={category.title}
              className="hidden lg:block h-7 w-7 border border-gray-200 rounded-sm"
            />
            <h3 className="lg:text-sm text-[13px]">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;