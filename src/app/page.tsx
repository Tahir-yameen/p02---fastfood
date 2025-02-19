'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const foodItems = [
  {
    id: '1',
    name: 'Classic Burger',
    price: '$8.99',
    image: '/classic-burger.jpg',
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    price: '$12.99',
    image: '/margherita-pizza.jpg',
  },
  {
    id: '3',
    name: 'Chicken Wings',
    price: '$10.99',
    image: '/chicken-wings.jpg',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/processed-foods.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Delicious Food
            <br />
            Delivered Fast
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {`Your favorite meals delivered to your doorstep in minutes`}
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            <a href="#pi">Order Now</a>
          </button>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4 bg-gray-50">
        <div id='pi' className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={item.id === '1'}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-red-600 font-bold mt-2">{item.price}</p>
                  <button 
                    className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Choose Your Food',
                description: 'Browse our menu and select your favorite items',
                icon: '🍔',
              },
              {
                title: 'Place Your Order',
                description: 'Customize your order and proceed to checkout',
                icon: '📝',
              },
              {
                title: 'Fast Delivery',
                description: 'Get your food delivered to your doorstep',
                icon: '🚚',
              },
            ].map((step, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8">
            {`Download our app and get 20% off on your first order!`}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors">
              App Store
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors">
              Google Play
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}