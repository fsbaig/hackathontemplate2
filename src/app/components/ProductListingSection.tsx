import React from 'react';
import Image from 'next/image';

const ProductListing: React.FC = () => {
  // Dummy product data with JPEG images
  const products = [
    { id: 1, name: 'Product 1', image: '/product1.jpeg', price: '$100' },
    { id: 2, name: 'Product 2', image: '/product2.jpeg', price: '$120' },
    { id: 3, name: 'Product 3', image: '/product3.jpeg', price: '$80' },
    { id: 4, name: 'Product 4', image: '/product4.jpeg', price: '$90' },
  ];

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Product Listing Box */}
        <div className="w-full lg:w-[1440px] mx-auto bg-white rounded-xl shadow-lg p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Product Listing</h2>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg flex flex-col items-center p-4"
              >
                {/* Product Image */}
                <div className="relative w-[305px] h-[375px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac magna et urna.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-[#6A4C93] text-white rounded-md hover:bg-[#5C3C6D] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
