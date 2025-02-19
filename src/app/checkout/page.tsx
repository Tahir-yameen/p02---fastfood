'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import CheckoutForm from '@/components/CheckoutForm';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push('/');
      return;
    }
  }, [items, router]);

  const handleSuccess = () => {
    router.push('/order-success');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CheckoutForm onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}
