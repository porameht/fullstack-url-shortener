import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimension()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimension());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Background = () => {
  const { width, height } = useWindowDimensions();
  const img = `https://source.unsplash.com/random/${width}x${height}`;

  return (
    <Image
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      right="0"
      zIndex="1"
      src={img}
      alt="bg"
    />
  );
};

export default Background;
