import ProductBox from "./box/ProductBox.jsx";

const Product = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6 pt-10">
        <h1 className="text-3xl font-bold px-5">All Product</h1>
        <select
          name="default_sorting"
          id="sorting"
          className="px-4 py-2 h-12 w-52 text-center border border-gray-400 rounded-md hover:border-red-500 hover:border-2 focus:border-red-500"
        >
          <option value="" className="">Default sorting</option>
          <option value="price">Sort By Price</option>
          <option value="popularity">Sort By Popularity</option>
          <option value="rating">Sort By Rating</option>
          <option value="sale">Sort By Sale</option>
        </select>
      </div>
      <ProductBox />
    </>
  );
};

export default Product;
