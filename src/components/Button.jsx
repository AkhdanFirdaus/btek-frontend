import React from 'react';

function Button({ disabled, name, handleClick }) {
  return (
    <button type="button" className={`px-3 py-2 drop-shadow-sm rounded ${disabled ? 'bg-slate-700 hover:bg-slate-800' : 'bg-purple-700  hover:bg-purple-800'} text-white font-medium`} disabled={disabled} onClick={() => handleClick()}>{name}</button>
  );
}

export default Button;
