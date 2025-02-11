import { useEffect, useState } from "react"
import categorieData from '../api/categories.json'
import Category from "./Category"

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    setTimeout(() => setCategories(categorieData), 1000)
  }, [])
  

  return (
    <div className="bg-white py-6 shadow-xl">
      <div className="container mx-auto 2xl:px-36">
        <h3 className="text-sm mb-2 font-semibold text-gray-600 md:p-0 pl-4 pb-2">Kategoriler</h3>
        <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4">
          {!categories.length && 'Yükleniyor...'}
          {categories && categories.map((category,index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories