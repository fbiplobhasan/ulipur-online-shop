import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { SwiperSlide,Swiper } from "swiper/react";


// Swiper styles import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Reviews = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios.get("/reviews.json");
      return data;
    },
  });

  if (isLoading) return <p className="text-center py-10">Loading....</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-xl transition">
              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {review.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.details}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
