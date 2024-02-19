import Partners from "../../components/common/Partners";
import Info from "../../components/information/Info";
import Items from "../../components/items/Items";
import TopProductPage from "../../components/items/TopProductPage";

const ProductPage = () => {
  return (
    <div>
      <TopProductPage />
      <Info />
      <div className="bg-[#FAFAFA] pt-10">
        <Items />
        <Partners />
      </div>
    </div>
  );
};

export default ProductPage;
