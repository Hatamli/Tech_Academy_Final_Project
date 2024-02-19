import React, { useState } from 'react';

function Pagination() {
  const [activePage, setActivePage] = useState(2);

  return (
    <div className="flex border rounded-md overflow-hidden font-bold w-max m-auto mt-14">
      <button 
        onClick={() => setActivePage(1)}
        className={`px-4 py-5 border border-[#E8E8E8] ${activePage === 1 ? 'bg-[#B73225] text-white' : 'text-[#BDBDBD] bg-[#F3F3F3]'}`}
      >
        First
      </button>
      <button 
        onClick={() => setActivePage(1)}
        className={`px-4 py-5 border border-[#E8E8E8] ${activePage === 1 ? 'bg-[#B73225] text-white' : 'text-[#B73225] hover:bg-[#F3F3F3]'}`}
      >
        1
      </button>
      <button 
        onClick={() => setActivePage(2)}
        className={`px-4 py-5 border border-[#E8E8E8] ${activePage === 2 ? 'bg-[#B73225] text-white' : 'text-[#B73225] hover:bg-[#F3F3F3]'}`}
      >
        2
      </button>
      <button 
        onClick={() => setActivePage(3)}
        className={`px-4 py-5 border border-[#E8E8E8] ${activePage === 3 ? 'bg-[#B73225] text-white' : 'text-[#B73225] hover:bg-[#F3F3F3]'}`}
      >
        3
      </button>
      <button 
        onClick={() => setActivePage(activePage + 1)}
          className="px-4 py-5 border border-[#E8E8E8] text-[#B73225] hover:bg-[#F3F3F3]"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
