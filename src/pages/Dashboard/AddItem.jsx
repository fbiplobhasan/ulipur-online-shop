import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { MdAddBusiness } from "react-icons/md";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        const newProduct = {
          name: data.name,
          category: data.category,
          description: data.description,
          price: parseFloat(data.price),
          image: res.data.data.display_url,
        };

        const productRes = await axiosPublic.post("/products", newProduct);

        if (productRes.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the product.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Add New Product
        </h2>

        {/* Recipe Name */}
        <div>
          <label className="label font-medium">Product Name*</label>
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label font-medium">Category*</label>
            <select
              {...register("category", { required: true })}
              defaultValue=""
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="cap">Cap</option>
              <option value="atar">Atar</option>
              <option value="tasbi">Tasbi</option>
              <option value="shoe">Shoe</option>
              <option value="t-shirt">T-Shirt</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Price*</label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Recipe details */}
        <div>
          <label className="label font-medium">Product description*</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Write product description..."
            className="textarea textarea-bordered w-full h-24"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="label font-medium">Upload Image*</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full flex items-center gap-2"
        >
          <MdAddBusiness size={20} /> Add Product
        </button>
      </form>
    </div>
  );
};

export default AddItem;
