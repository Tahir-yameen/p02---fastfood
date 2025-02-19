'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function OrderSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-sm text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We'll process it right away!
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
