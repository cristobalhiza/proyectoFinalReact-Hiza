import React, { useState, useEffect } from "react";
import tennisImage1 from "../../assets/images/carousel/image1.jpg";
import tennisImage2 from "../../assets/images/carousel/image2.jpg";
import tennisImage3 from "../../assets/images/carousel/image3.jpg";
import tennisImageSmall from "../../assets/images/carousel/image1-sm.png";
import { Link } from "react-router-dom";

const HeroSectionComponent = ({ setLoading }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);

  const images = [tennisImage1, tennisImage2, tennisImage3];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (imagesLoaded === images.length) {
      setLoading(false);
    }
  }, [imagesLoaded, images.length, setLoading]);

  useEffect(() => {
    if (isLargeScreen) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length, isLargeScreen]);

  return (
    <div className="hero-section mt-16">
      <div className="carousel relative w-full h-dvh">
        {isLargeScreen ? (
          images.map((image, index) => (
            <div
              key={index}
              className={`slide absolute w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <img
                src={image}
                alt={`slide ${index + 1}`}
                className="hidden"
                onLoad={handleImageLoad}
              />
              <div className="absolute inset-0 flex items-center justify-center h-full">
                <div className="text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                    Bienvenidos a Court Corner
                  </h1>
                  <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
                    Equipamos tu juego para que domines la cancha
                  </p>
                  <Link
                    to="/products"
                    className="bg-custom-green text-white px-6 py-3 rounded-lg text-lg md:text-xl font-semibold drop-shadow-md hover:text-custom-red"
                  >
                    Ver Productos
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="slide w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${tennisImageSmall})` }}
          >
            <img
              src={tennisImageSmall}
              alt="slide small"
              className="hidden"
              onLoad={handleImageLoad}
            />
            <div className="absolute inset-0 flex items-center justify-center h-full">
              <div className="text-center px-4">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                  Bienvenidos a Court Corner
                </h1>
                <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
                  Equipamos tu juego para que domines la cancha
                </p>
                <Link
                  to="/products"
                  className="bg-custom-green text-white px-6 py-3 rounded-lg text-lg md:text-xl font-semibold drop-shadow-md hover:text-custom-red"
                >
                  Ver Productos
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSectionComponent;
