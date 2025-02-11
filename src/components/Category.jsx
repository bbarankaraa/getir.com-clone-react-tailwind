import { Link } from "react-router-dom";

export default function Category({category : {id,title,image}}) {
  return (
    <Link to="/categories" className="flex flex-col group items-center text-center p-4 transition hover:bg-purple-50">
        <img src={image} alt={title} className="w-12 h-12 rounded-lg border border-gray-200" />
        <span className="text-[15px] text-gray-600 font-semibold mt-3 h-8 whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
    </Link>
  )
}
