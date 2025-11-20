import React, { useEffect, useState } from "react";

const AutoSlider = () => {
  const images = [
    "https://res.cloudinary.com/dec2rowhi/image/upload/v1763215433/slide3_pxwhnq.png",
    "https://res.cloudinary.com/dec2rowhi/image/upload/v1763215297/slide2_tulsue.png",
    "https://res.cloudinary.com/dec2rowhi/image/upload/v1763215396/slide5_uxrq5l.png",
    "https://res.cloudinary.com/dec2rowhi/image/upload/v1763215330/slide4_jvdbua.png",
    "https://res.cloudinary.com/dec2rowhi/image/upload/v1763215169/slide1_e6tncq.png",
  ];

  
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-3 mb-5">
      <img
        src={images[index]}
        className="
          w-full 
          h-auto 
          max-h-[350px] 
          sm:max-h-[400px] 
          md:max-h-[450px] 
          lg:max-h-[500px]
          object-cover 
          rounded-xl
          shadow
        "
      />
    </div>
  );
};

export default AutoSlider;
