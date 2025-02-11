import { useEffect } from "react"
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar"
import Campaigns from "../components/Campaigns"
import Shop from "../components/Shop"
import Footer from "../components/common/Footer"

const CategoriesPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Header />
        <Navbar />
        <Campaigns />
        <Shop />
        <Footer />
    </div>
  )
}

export default CategoriesPage