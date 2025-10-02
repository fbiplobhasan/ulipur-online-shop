import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductDetails = () => {
  const axiosPublic = useAxiosPublic();
  const [isAdmin,,refetch] = useAdmin();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/products/${product._id}`);
        if (res.data.deletedCount > 0) {
          // refetch
          refetch();
          navigate('/')
          Swal.fire({
            title: `${item.name} has been delete.`,
            icon: "success",
            draggable: true,
          });
        }
      }
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-2xl border border-gray-200 mt-20">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
        {product.category && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-xs rounded-full shadow">
            {product.category}
          </span>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <p className="text-2xl font-semibold text-orange-600">
          ${product.price}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        {
            !isAdmin && (
                <button className="flex-1 btn bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300">
          Add to Cart
        </button>
            )
        }

        {isAdmin && (
          <>
            <Link
              to={`/dashboard/updateItem/${product._id}`}
              className="flex-1"
            >
              <button className="btn w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition-transform duration-300">
                Update
              </button>
            </Link>

            <button
            onClick={() => handleDeleteItem(product)}
            className="flex-1 btn bg-gradient-to-r from-red-500 to-pink-600 text-white hover:scale-105 transition-transform duration-300">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
