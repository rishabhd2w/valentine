import React from "react";

export default function GiftPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
      <div className="flex gap-8 mb-8">
        <img src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="Gift 1" className="w-24 h-24" />
        <img src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="Gift 2" className="w-24 h-24" />
        <img src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="Gift 3" className="w-24 h-24" />
      </div>
      <div className="text-6xl mb-4">😘</div>
      <div className="text-3xl font-bold text-rose-600 text-center mb-2">Okay, you the premium subscription of Rishu</div>
      <div className="text-2xl font-semibold text-rose-500">Now Rishu is all yours!</div>
    </div>
  );
}
