"use client";

import Image from 'next/image';

export default function Home() {
  const imageList = [
    '/image1.png',
    '/image2.png',
    '/image3.png',
    '/image4.png',
    '/image5.png',
    '/image6.png',
    '/image7.png',
    '/image8.png',
   
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Instagram Heading */}
      <h1 className="text-white text-3xl font-bold text-center mb-6">Instagram</h1>

      {/* Grid of Images */}
      <div className="grid grid-cols-3 gap-2">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden border border-white"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Flebo-style centered single image */}
      <div className="flex justify-center mt-6">
        <div className="relative w-[200px] aspect-square border border-white">
          <Image
            src="/image1.png"
            alt="Bottom Center Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
