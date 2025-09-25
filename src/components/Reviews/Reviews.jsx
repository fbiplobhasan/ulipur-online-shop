import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Swiper styles import
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

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
    <div className="my-24">
      <h2 className="text-center text-3xl font-bold">Testimonials!</h2>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        className="mySwiper"
      >
        <div>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center m-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl my-3.5" />
                <p>{review.description}</p>
                <h3>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
