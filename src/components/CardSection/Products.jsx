import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [count, setCount] = useState(0);

  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    fetch("http://localhost:3000/productsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3000/products?page=${currentPage}&size=${itemsPerPage}`
      );
      return data;
    },
  });

  if (isLoading) return <p>Loading....</p>;

  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="px-6 md:px-12 lg:px-20 py-12"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Explore our latest collection of premium gadgets and accessories
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => ( <Card 
          key={p._id} 
          p={p}>
          </Card>
            
          ))}
        </div>
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} className="btn">
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="btn">
          Next
        </button>
        <select value={itemsPerPage} onChange={handleItemPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Products;
