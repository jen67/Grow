import Greynavbar from "../components/Greynav";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

function Product() {
  

  return (
    <div className="">
      <div className="bg-gray-200">
        <Greynavbar />
        <Courses />

        {/* <Link to="/dashboard">Product</Link> */}
      </div>
      <Footer />
    </div>
  );
}

export default Product;