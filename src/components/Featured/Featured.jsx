import React from "react";
import FeaturedImg from "../../assets/Featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div
      className="featured-item pt-7 my-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${FeaturedImg})` }}
    >
      <div className="flex flex-col md:flex-row py-6 px-4 md:px-7 gap-5 items-center md:items-start">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={FeaturedImg}
            alt=""
            className="rounded-lg shadow-md w-full max-w-sm"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
          <p className="text-sm text-gray-200">Aug 20, 2029</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Where can i get some?
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            facere, cumque provident blanditiis maxime fugit fugiat doloremque
            eveniet voluptas molestias corrupti quisquam voluptatum obcaecati
            fuga debitis, nihil odio deleniti excepturi recusandae non saepe
            rerum culpa ullam sed. Suscipit, dignissimos velit. Cupiditate,
            dolores. Quisquam eum, quos voluptates ullam assumenda impedit
            dicta.
          </p>
          <button className="btn btn-outline mt-2 border-0 border-b-4 border-amber-300">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
