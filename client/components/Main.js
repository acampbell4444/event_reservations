import React from 'react';

export default function ({ children }) {
  return (
    <div>
      <div className="">
        { children }
      </div>
      <div className=""></div>
    </div>
  );
}