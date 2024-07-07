import React, { useState, useEffect } from "react";
import "./HeroSectionComponent.css";
import tennisImage1 from "../../assets/images/carousel/image1.jpg";
import tennisImage2 from "../../assets/images/carousel/image2.jpg";
import tennisImage3 from "../../assets/images/carousel/image3.jpg";
import { Link } from "react-router-dom";

const HeroSectionComponent = ({ setLoading }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const images = [tennisImage1, tennisImage2, tennisImage3];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === images.length) {
      setLoading(false);
    }
  }, [imagesLoaded, images.length, setLoading]);

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const showSlides = () => {
      slides.forEach((slide) => {
        slide.style.opacity = "0";
      });
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.opacity = "1";
      setTimeout(showSlides, 4000);
    };
    showSlides();
  }, []);

  return (
    <div className="hero-section">
      <div className="carousel relative w-full h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className="slide w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img
              src={image}
              alt={`slide ${index + 1}`}
              style={{ display: "none" }}
              onLoad={handleImageLoad}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                  Bienvenidos a Court Corner
                </h1>
                <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
                  Equipamos tu juego para que domines la cancha
                </p>
                <Link
                  to="/products"
                  className="bg-custom-green text-white px-6 py-3 rounded-lg text-lg md:text-xl font-semibold hover:bg-green-600 transition duration-300 ease-in-out shadow-lg drop-shadow-md"
                >
                  Ver Productos
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionComponent;
