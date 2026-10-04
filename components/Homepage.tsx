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

      {/* PREMIUM DISCOVERY */}
      <section className="bg-white px-4 pt-5 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">Explore</p>
            <h2 className="text-xl font-black text-gray-900 tracking-tight">What are you craving?</h2>
          </div>
          <button className="h-9 w-9 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg">
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <div className="min-w-[92px] rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 p-3 shadow-sm">
            <div className="h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">🍔</div>
            <p className="mt-2 text-xs font-black text-gray-900">Burgers</p>
            <p className="text-[9px] text-gray-500 font-semibold">From ₹49</p>
          </div>
          <div className="min-w-[92px] rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 p-3 shadow-sm">
            <div className="h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">🥟</div>
            <p className="mt-2 text-xs font-black text-gray-900">Momos</p>
            <p className="text-[9px] text-gray-500 font-semibold">From ₹69</p>
          </div>
          <div className="min-w-[92px] rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-100 p-3 shadow-sm">
            <div className="h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">🌯</div>
            <p className="mt-2 text-xs font-black text-gray-900">Rolls</p>
            <p className="text-[9px] text-gray-500 font-semibold">From ₹69</p>
          </div>
          <div className="min-w-[92px] rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-3 shadow-sm">
            <div className="h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">🍟</div>
            <p className="mt-2 text-xs font-black text-gray-900">Snacks</p>
            <p className="text-[9px] text-gray-500 font-semibold">From ₹29</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 pt-5 pb-7">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">Best picks</p>
            <h2 className="text-xl font-black text-gray-900">Meals under ₹99</h2>
          </div>
          <button className="text-xs font-bold text-orange-600 flex items-center">See All <ChevronRight size={15}/></button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[22px] overflow-hidden border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
            <div className="h-32 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 relative">
              <span className="absolute top-2 left-2 bg-gray-900 text-white text-[9px] font-black px-2 py-1 rounded-full">POPULAR</span>
              <button className="absolute right-2 bottom-2 w-9 h-9 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-lg active:scale-90 transition-transform"><Plus size={19} strokeWidth={3}/></button>
            </div>
            <div className="p-3">
              <div className="flex items-center gap-1 text-[9px] font-black text-green-700"><Star size={10} fill="currentColor"/> 4.9 <span className="text-gray-300">•</span> Fast</div>
              <p className="text-[10px] text-gray-500 mt-1">BOOM - Sub Style Sa...</p>
              <p className="text-sm font-black text-gray-900 leading-tight mt-1">Veggie Delight Sub-Sandwich</p>
              <div className="mt-2 flex items-center gap-2"><span className="text-[10px] text-gray-400 line-through">₹199</span><span className="text-base font-black text-gray-900">₹99</span></div>
            </div>
          </div>

          <div className="bg-white rounded-[22px] overflow-hidden border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
            <div className="h-32 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 relative">
              <span className="absolute top-2 left-2 bg-gray-900 text-white text-[9px] font-black px-2 py-1 rounded-full">POPULAR</span>
              <button className="absolute right-2 bottom-2 w-9 h-9 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-lg active:scale-90 transition-transform"><Plus size={19} strokeWidth={3}/></button>
            </div>
            <div className="p-3">
              <div className="flex items-center gap-1 text-[9px] font-black text-green-700"><Star size={10} fill="currentColor"/> 4.2 <span className="text-gray-300">•</span> Fast</div>
              <p className="text-[10px] text-gray-500 mt-1">Just Baked</p>
              <p className="text-sm font-black text-gray-900 leading-tight mt-1">Chicken Burger</p>
              <div className="mt-2 flex items-center gap-2"><span className="text-[10px] text-gray-400 line-through">₹80</span><span className="text-base font-black text-gray-900">₹58</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
