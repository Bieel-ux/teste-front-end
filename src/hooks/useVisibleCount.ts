import { useState, useEffect } from 'react';

function getVisibleCount(): number {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 4;
}

export function useVisibleCount(): number {
  const [count, setCount] = useState(getVisibleCount);

  useEffect(() => {
    function handleResize() {
      setCount(getVisibleCount());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return count;
}