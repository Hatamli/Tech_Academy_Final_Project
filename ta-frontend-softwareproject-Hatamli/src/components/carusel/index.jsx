import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; 
import caruselImg from "../../assets/images/carousel-item.png"

const images = [
  {
    original: caruselImg,
    thumbnail: caruselImg,
  },
  {
    original: caruselImg,
    thumbnail: caruselImg,
  },
  {
    original: caruselImg,
    thumbnail: caruselImg,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  const itemsWithOpacity = images.map((image, index) => ({
    ...image,
  }));

  return (
    <div className="custom-gallery-container col-span-1 md:me-7">
      <ImageGallery
        items={itemsWithOpacity}
        showFullscreenButton={false}
        showPlayButton={false}
        onSlide={onSlide}
      />
    </div>
  );
};

export default Carousel;
