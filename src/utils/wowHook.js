import { useEffect } from 'react';
import WOW from 'wowjs';

export const useWow = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
};
