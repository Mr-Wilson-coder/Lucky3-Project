import React from 'react';

const NumberGrid = ({ selectedNumbers, onNumberSelect }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid grid-cols-5 gap-1 md:gap-2 mb-3 md:mb-4">
      {numbers.map(num => (
        <button
          key={num}
          onClick={() => onNumberSelect(num)}
          className={`aspect-square h-10 md:h-12 text-sm md:text-base font-bold rounded-lg border-2 transition-all duration-200 ${
            selectedNumbers.includes(num)
              ? 'border-amber-400 bg-amber-400 text-black shadow-lg'
              : 'border-gray-300 bg-white hover:border-indigo-500 hover:bg-indigo-50'
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default NumberGrid;
