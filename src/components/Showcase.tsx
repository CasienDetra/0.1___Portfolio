import Image from 'next/image';
import React from 'react';

const graphicDesignItems = [
  {
    id: 1,
    title: 'Football Poster',
    image: '/nick-taylor.jpg',
    description: 'App : Adobe Photoshop',

  },
  {
    id: 2,
    title: 'Cambodia Queen Birthday Poster',
    image: '/queen.png',
    description: 'App : Adobe Photoshop',

  },
  {
    id: 3,
    title: 'Practice Poster',
    image: '/off-Computer.jpg',
    description: 'App : Adobe Photoshop',

  },
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-16  dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white ">Some of My Artwork</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {graphicDesignItems.map((item) => (
            <div key={item.id} className="group bg-black rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
