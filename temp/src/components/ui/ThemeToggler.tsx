import { useEffect, useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <FontAwesomeIcon
        className="theme-icon bg-[#1f1f1f] dark:bg-white shadow-lg fixed left-[15px] bottom-[15px] w-[57px] h-[57px] cursor-pointer rounded-full p-[10px] !box-border"
        onClick={toggleTheme}
        size="xs"
        color={theme === 'light' ? '#fff' : '#1f1f1f'}
        icon={theme === 'light' ? faMoon : faSun}
      />
    </div>
  );
};

export default ThemeToggler;
