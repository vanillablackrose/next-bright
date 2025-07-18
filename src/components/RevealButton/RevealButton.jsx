'use client';
import React from 'react';

function RevealButton({ children }) {
  const [isShown, setIsShown] = React.useState(false);

  return isShown ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsShown(true)}>Reveal Content</button>
    </div>
  );
}

export default RevealButton;
