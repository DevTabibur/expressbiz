import React from "react";
import Client1 from "../../Assets/carousel/client-1.jpg";
import Client2 from "../../Assets/carousel/client-2.jpg";
import Client3 from "../../Assets/carousel/client-3.jpg";
import Client4 from "../../Assets/carousel/client-4.jpg";
import Client5 from "../../Assets/carousel/client-5.jpg";
import Client6 from "../../Assets/carousel/client-6.jpg";
const Gallery = () => {
  return (
    <>
      {/* client */}
      <section className="bg-success overflow-hidden">
        <div className="container my-12 px-5 mx-auto lg:pt-4 lg:px-32">
          <h1 className="text-accent font-bold text-3xl">
            OUR VALUABLE CLIENT
          </h1>
          <hr className="my-8"></hr>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Client1}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Client2}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Client3}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Client4}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Client5}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Client6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
