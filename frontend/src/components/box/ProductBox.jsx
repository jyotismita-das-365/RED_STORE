import shirt1 from "../../assets/products/shirts/shirt1/image1.png";
import shirt2 from "../../assets/products/shirts/shirt2/image1.png";
import shirt3 from "../../assets/products/shirts/shirt3/image1.png";

const ProductBox = () => {
  const shirts = [
    {
      id: 1,
      name: "Symbol Premium Men's Checkered Casual Shirt",
      price: 19,
      image: shirt1,
      rating: 4.5,
    },
    {
      id: 2,
      name: "U.S. POLO ASSN. Men's Cotton Regular Fit Shirt",
      price: 10,
      image: shirt2,
      rating: 4.2,
    },
    {
      id: 3,
      name: "AADI Men's Synthetic Leather Lightweight Shirt",
      price: 50,
      image: shirt3,
      rating: 4.8,
    },
  ];

  const handleAddToCart = (shirt) => {
    console.log(`Added ${shirt.name} to cart`);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
        {shirts.map((shirt) => (
          <div
            key={shirt.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={shirt.image}
              alt="shirts images"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              {shirt.name}
            </h3>
            <p className="text-lg font-bold text-red-500 mb-2">
              Price: ${shirt.price}
            </p>
            <p className="text-sm text-yellow-500 font-semibold mb-4">
              ⭐ Rating: {shirt.rating}/5
            </p>
            <button
              onClick={() => handleAddToCart(shirt)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-full transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductBox;
