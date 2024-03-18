import React from "react";
import Image from "next/image";
import NextImage from "../../assets/twitter-card.png"; //Relative path
// import NextImage from "@/assets/twitter-card.png"; //Absolute path (import alias)

export const metadata = {
  title: "ABC || Gallery",
  description: "This is gallery page",
};

const Gallery = () => {
  return (
    <div className="m-20  justify-center items-center text-center space-y-3">
      <h2 className="text-4xl ">Image Optimizations</h2>

      <h3 className="text-2xl">Regular image tag</h3>
      <img
        src="https://nextjs.org/static/blog/next-14-1/twitter-card.png"
        className="mx-auto"
        alt="Regular image"
        width={500}
        height={500}
      />

      <h3 className="text-2xl text-blue-500 font-semibold">
        Next js Image Component
      </h3>

      <Image
        src="https://nextjs.org/static/blog/next-14-1/twitter-card.png"
        className="mx-auto"
        alt="next image"
        width={500}
        height={500}
      />

      <h3 className="text-2xl text-blue-500 font-semibold">Local Image</h3>

      <Image
        src={NextImage}
        className="mx-auto"
        alt="next image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Gallery;
