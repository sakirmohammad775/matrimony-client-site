import { Carousel } from "flowbite-react";
import image from "../../assets/project-1.jpg"

const Banner = () => {
  return (
    <>
      <div className="h-96 sm:h-[600px] xl:h-[600px]">
        <Carousel slideInterval={5000}>
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
        </Carousel>
      </div>
    </>
  );
};

export default Banner;