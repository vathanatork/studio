import { useState, useEffect } from 'react';

export function useOrigin() {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(typeof window !== 'undefined' && window.location.origin ? window.location.origin : '');
  }, []);

  return origin;
}
