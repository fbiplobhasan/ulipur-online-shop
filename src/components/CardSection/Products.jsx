import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";

const Products = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("/products.json");
      return data;
    },
  });

  console.log(products);

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Explore our latest collection of premium gadgets and accessories
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
