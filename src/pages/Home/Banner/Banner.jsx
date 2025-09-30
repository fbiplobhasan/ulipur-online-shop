import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner/Banner1.jpg";
import banner2 from "../../../assets/Banner/Banner2.jpg";
import banner3 from "../../../assets/Banner/Banner3.jpg";
import banner4 from "../../../assets/Banner/Banner4.jpg";
import banner5 from "../../../assets/Banner/Banner5.jpg";

const Banner = () => {
  return (
    <div className="mt-16">
      <Carousel autoPlay={true} stopOnHover={true} infiniteLoop={true}>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
