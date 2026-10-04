import React from 'react';
import { Search, ChevronDown, Menu, ChevronRight, Star, Plus } from 'lucide-react';

export default function FoodDeliveryUI() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans overflow-hidden">
      {/* HEADER SECTION (Changed to Orange) */}
      <div className="bg-orange-500 px-4 pt-4 pb-2">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-full flex justify-center items-center h-10 w-10">
              {/* Custom Map Pointer Icon to match image */}
              <svg viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                <path d="M21 3L3 10.533L9.8 14.2L13.467 21L21 3Z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 font-extrabold text-gray-900 text-lg leading-tight">
                55/48 <ChevronDown size={18} strokeWidth={3} />
              </div>
              <div className="text-xs font-medium text-gray-800">
                Salkia, Howrah, West Bengal, India
              </div>
            </div>
          </div>
          <button className="text-gray-900 flex flex-col items-center justify-center gap-1" aria-label="Menu">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-gray-900"></span>
              <span className="w-5 h-0.5 rounded-full bg-gray-900"></span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-gray-900"></span>
              <span className="w-5 h-0.5 rounded-full bg-gray-900"></span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-gray-900"></span>
              <span className="w-5 h-0.5 rounded-full bg-gray-900"></span>
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-5">
          <div className="bg-white rounded-2xl p-3 flex items-center gap-2 shadow-sm">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for 'Fries'"
              className="w-full outline-none text-gray-700 font-medium placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Hero Banner Area */}
        <div className="flex justify-between items-center mt-6 pb-4">
          <div className="w-3/5 z-10">
            <div className="leading-[0.85]">
              <h1
                className="text-[2.9rem] font-black text-yellow-400 drop-shadow-sm whitespace-nowrap scale-x-90 origin-left"
                style={{ WebkitTextStroke: '2.5px black' }}
              >
                Good Mood
              </h1>
              <h1
                className="text-[2.9rem] font-black text-white drop-shadow-sm whitespace-nowrap scale-x-110 origin-left"
                style={{ WebkitTextStroke: '2.5px black' }}
              >
                Good Food
              </h1>
            </div>
            <p className="text-gray-900 font-bold mt-1 text-[10px] border-b-2 border-gray-900 inline-block pb-0.5">
              Dishes starting at ₹29
            </p>
            <button className="mt-3 bg-yellow-400 text-black font-extrabold text-[9px] py-1 px-3 rounded-full border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-90 transition-transform whitespace-nowrap w-max">
              ORDER NOW
            </button>
          </div>

          <div className="w-1/2 flex justify-end translate-x-12 -translate-y-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/file_00000000f59c82119e801087b7277db9.png`}
              alt="Good Mood TV"
              className="w-full h-auto object-contain scale-[2.05] origin-right"
            />
          </div>
        </div>
      </div>

      {/* PROMO STRIP */}
      <div className="bg-yellow-400 w-full py-1.5 text-center flex items-center justify-center gap-2">
        <span className="text-teal-600 text-xs bg-transparent">✨</span>
        <span className="text-black font-bold text-[11px] tracking-wide">
          GET ADDITIONAL ₹25 FREE CASH
        </span>
        <span className="text-teal-600 text-xs bg-transparent">✨</span>
      </div>

      {/* CATEGORIES */}
      <div className="bg-white pt-5 pb-3 border-b border-gray-100">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
          {/* Active Category */}
          <div className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer">
            <div className="w-[68px] h-[68px] bg-gradient-to-br from-pink-50 to-orange-50 rounded-[1.35rem] flex justify-center items-center shadow-[0_5px_16px_rgba(0,0,0,0.08)] border border-white">
               {/* Placeholder for 'All' collage graphic */}
               <div className="grid grid-cols-2 gap-0.5 w-10 h-10 rounded-full overflow-hidden">
                  <div className="bg-orange-300"></div>
                  <div className="bg-yellow-300"></div>
                  <div className="bg-green-300"></div>
                  <div className="bg-red-300"></div>
               </div>
            </div>
            <span className="font-bold text-xs text-gray-900">All</span>
          </div>

          {/* Other Categories */}
          {[
            { name: 'Rolls', price: '₹69' },
            { name: 'Burgers', price: '₹49' },
            { name: 'Momos', price: '₹69' }
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer">
              <div className="w-[68px] h-[68px] bg-white border border-gray-100 rounded-[1.35rem] flex flex-col justify-end items-center relative overflow-hidden shadow-[0_5px_16px_rgba(0,0,0,0.07)]">
                <div className="w-10 h-10 bg-gray-200 rounded-full mb-3"></div> {/* Image Placeholder */}
                <div className="absolute bottom-0 w-full bg-pink-500 text-white text-[9px] font-bold text-center py-0.5">
                  FROM {cat.price}
                </div>
              </div>
              <span className="font-semibold text-xs text-gray-600">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MEALS SECTION */}
      <div className="bg-gray-50 p-4 pt-7 mt-1">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">Meals under ₹99</h2>
          <button className="text-gray-500 text-xs font-semibold flex items-center">
            See All <ChevronRight size={14} className="ml-0.5" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6">
          {/* Card 1 */}
          <div className="min-w-[150px] bg-white rounded-2xl overflow-visible border border-gray-100 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div className="relative h-28 bg-gray-800 rounded-2xl mb-4">
              {/* Product Image Placeholder */}
              <div className="absolute top-2 left-2 bg-white text-green-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-sm">
                Popular
              </div>
              <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-pink-500 rounded-full w-9 h-9 flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform">
                <Plus size={20} strokeWidth={3} />
              </button>
            </div>
            
            <div className="pt-2 px-1">
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-green-700 bg-green-50 w-max px-1.5 py-0.5 rounded mb-1.5">
                <Star size={10} fill="currentColor" /> 4.9
              </div>
              <p className="text-[11px] text-gray-500 truncate font-medium">BOOM - Sub Style Sa...</p>
              <p className="font-bold text-sm leading-tight mt-0.5 text-gray-900 h-10">
                Veggie Delight Sub-Sandwich
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-gray-400 text-[11px] font-medium line-through">₹199</span>
                <span className="font-extrabold text-sm text-gray-900">₹99</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 border border-pink-100 bg-pink-50/50 rounded px-1.5 py-0.5">
                <span className="text-pink-500 text-[10px]">&hearts;</span>
                <span className="text-[9px] text-pink-600 font-bold">Our app: 50% lower</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[150px] bg-white rounded-2xl overflow-visible">
            <div className="relative h-28 bg-gray-800 rounded-2xl mb-4">
              <div className="absolute top-2 left-2 bg-white text-green-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-sm">
                Popular
              </div>
              <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-pink-500 rounded-full w-9 h-9 flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform">
                <Plus size={20} strokeWidth={3} />
              </button>
            </div>
            
            <div className="pt-2 px-1">
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-gray-600 bg-gray-100 w-max px-1.5 py-0.5 rounded mb-1.5">
                <Star size={10} fill="currentColor" /> 4.2
              </div>
              <p className="text-[11px] text-gray-500 truncate font-medium">Just Baked</p>
              <p className="font-bold text-sm leading-tight mt-0.5 text-gray-900 h-10">
                <span className="inline-block w-3 h-3 border border-red-500 rounded-sm mr-1 relative top-0.5">
                   <span className="absolute inset-0 m-auto w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                </span>
                Chicken Burger
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-gray-400 text-[11px] font-medium line-through">₹80</span>
                <span className="font-extrabold text-sm text-gray-900">₹58</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 border border-pink-100 bg-pink-50/50 rounded px-1.5 py-0.5">
                <span className="text-pink-500 text-[10px]">&hearts;</span>
                <span className="text-[9px] text-pink-600 font-bold">Our app: 40% lower</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
