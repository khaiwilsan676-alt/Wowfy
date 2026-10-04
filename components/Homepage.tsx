import React from 'react';
import { Search, ChevronDown, Menu, ChevronRight, Star, Plus } from 'lucide-react';

export default function FoodDeliveryUI() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans overflow-hidden">
      <div className="bg-orange-500 px-4 pt-4 pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-full flex justify-center items-center h-10 w-10">
              <svg viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                <path d="M21 3L3 10.533L9.8 14.2L13.467 21L21 3Z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 font-extrabold text-gray-900 text-lg leading-tight">
                55/48 <ChevronDown size={18} strokeWidth={3} />
              </div>
              <div className="text-xs font-medium text-gray-800">Salkia, Howrah, West Bengal, India</div>
            </div>
          </div>
          <button className="text-gray-900" aria-label="Menu"><Menu size={28} strokeWidth={2.5} /></button>
        </div>

        <div className="flex items-center gap-3 mt-5">
          <div className="flex-1 bg-white rounded-2xl p-3 flex items-center gap-2 shadow-sm">
            <Search size={20} className="text-gray-400" />
            <input type="text" placeholder="Search for 'Fries'" className="w-full outline-none text-gray-700 font-medium placeholder-gray-400 text-sm bg-transparent" />
          </div>
          <div className="bg-white rounded-2xl p-2 px-3 flex flex-col items-center justify-center shadow-sm border border-gray-100">
            <span className="text-[10px] font-bold text-green-700 mb-1">VEG</span>
            <div className="w-8 h-4 bg-gray-200 rounded-full relative flex items-center">
              <div className="w-3.5 h-3.5 bg-green-600 rounded-full absolute left-0.5 border border-white" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 pb-4">
          <div className="w-3/5 z-10">
            <div className="leading-[0.85]">
              <h1 className="text-4xl font-black text-yellow-400 drop-shadow-sm" style={{WebkitTextStroke:'1.5px black'}}>Weekend</h1>
              <h1 className="text-[2.7rem] font-black text-white drop-shadow-sm" style={{WebkitTextStroke:'1.5px black'}}>DROP</h1>
            </div>
            <p className="text-gray-900 font-bold mt-2 text-xs border-b-2 border-gray-900 inline-block pb-0.5">Dishes starting at ₹29</p>
            <button className="mt-3 bg-yellow-400 text-black font-extrabold text-xs py-2 px-4 rounded-full border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">ORDER NOW</button>
          </div>
          <div className="w-2/5 flex justify-end">
            <img src="/assets/file_00000000f59c82119e801087b7277db9.png" alt="Weekend Drop" className="w-full h-auto object-contain scale-110 origin-right" />
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 w-full py-1.5 text-center flex items-center justify-center gap-2">
        <span className="text-black font-bold text-[11px] tracking-wide">GET ADDITIONAL ₹25 FREE CASH</span>
      </div>

      <div className="bg-white pt-4 pb-2">
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
          <div className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="w-16 h-16 bg-pink-100 rounded-[1.25rem] flex justify-center items-center shadow-sm">
              <div className="grid grid-cols-2 gap-0.5 w-10 h-10 rounded-full overflow-hidden">
                <div className="bg-orange-300" /><div className="bg-yellow-300" />
                <div className="bg-green-300" /><div className="bg-red-300" />
              </div>
            </div>
            <span className="font-bold text-xs text-gray-900">All</span>
          </div>
          {[
            {name:'Rolls',price:'₹69',image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=85'},
            {name:'Burgers',price:'₹49',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=85'},
            {name:'Momos',price:'₹69',image:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=300&q=85'}
          ].map(cat => (
            <div key={cat.name} className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-[1.25rem] flex flex-col justify-end items-center relative overflow-hidden shadow-sm">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 w-full bg-pink-500 text-white text-[9px] font-bold text-center py-0.5">FROM {cat.price}</div>
              </div>
              <span className="font-semibold text-xs text-gray-600">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 pt-6 mt-1">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-extrabold text-gray-900">Meals under ₹99</h2>
          <button className="text-gray-500 text-xs font-semibold flex items-center">See All <ChevronRight size={14} className="ml-0.5" /></button>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6">
          {[
            {name:'Veggie Delight Sub-Sandwich',brand:'BOOM - Sub Style Sa...',old:'₹199',price:'₹99',rating:'4.9',image:'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=500&q=85'},
            {name:'Chicken Burger',brand:'Just Baked',old:'₹80',price:'₹58',rating:'4.2',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=85'}
          ].map(item => (
            <div key={item.name} className="min-w-[150px] bg-white rounded-2xl">
              <div className="relative h-28 rounded-2xl mb-4 overflow-hidden bg-gray-200">
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-2 left-2 bg-white text-green-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-sm">Popular</div>
                <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-pink-500 rounded-full w-9 h-9 flex justify-center items-center shadow-lg" aria-label="Add">
                  <Plus size={20} strokeWidth={3} />
                </button>
              </div>
              <div className="pt-2 px-1">
                <div className="flex items-center gap-0.5 text-[10px] font-bold text-green-700 bg-green-50 w-max px-1.5 py-0.5 rounded mb-1.5">
                  <Star size={10} fill="currentColor" /> {item.rating}
                </div>
                <p className="text-[11px] text-gray-500 truncate font-medium">{item.brand}</p>
                <p className="font-bold text-sm leading-tight mt-0.5 text-gray-900 h-10">{item.name}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-gray-400 text-[11px] font-medium line-through">{item.old}</span>
                  <span className="font-extrabold text-sm text-gray-900">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
