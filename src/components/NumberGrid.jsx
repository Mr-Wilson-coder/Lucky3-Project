import React from 'react';

const NumberGrid = ({ selectedNumbers, onNumberSelect }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {numbers.map(num => (
        <button
          key={num}
          onClick={() => onNumberSelect(num)}
          className={`number-button ${
            selectedNumbers.includes(num) ? 'selected' : ''
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default NumberGrid;
