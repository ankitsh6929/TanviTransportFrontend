import React from "react";
import Slider from "react-slick";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "#1976D2",
        borderRadius: "50%",
        padding: "8px",
        position: "absolute",
        right: "-25px",
        top: "45%",
        cursor: "pointer",
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        color: "#fff",
        fontSize: "18px",
        lineHeight: "18px",
        textAlign: "center",
        userSelect: "none"
      }}
      onClick={onClick}
      aria-label="Next Slide"
    >
      ▶
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "#1976D2",
        borderRadius: "50%",
        padding: "8px",
        position: "absolute",
        left: "-25px",
        top: "45%",
        cursor: "pointer",
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        color: "#fff",
        fontSize: "18px",
        lineHeight: "18px",
        textAlign: "center",
        userSelect: "none"
      }}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      ◀
    </div>
  );
}


export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto 40px", position: "relative" }}>
      <Slider {...settings}>
        {[slide1, slide2, slide3, slide4].map((img, index) => (
          <div key={index}>
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                width: "600px", 
                height: "320px", 
                objectFit: "cover", 
                borderRadius: 12, 
                margin: "0 auto" 
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
