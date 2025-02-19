'use client';

import { useState } from 'react';

export default function CheckoutForm({ onSuccess }: { onSuccess: () => void }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Confirmation</h2>
        <p className="text-gray-600 mb-4">Click the button below to confirm your order.</p>
      </div>
      
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isProcessing ? 'Processing...' : 'Confirm Order'}
      </button>
    </form>
  );
}
