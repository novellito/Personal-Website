import { useEffect, useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

// const ThemeTogglerWrapper = styled.div`
//   .theme-toggler {
//     position: fixed;
//     left: 15px;
//     bottom: 14px;
//     height: 58px;
//     width: 58px;
//     z-index: 1000;
//     cursor: pointer;
//     animation: fadeIn 0.3s;
//     outline: none;
//     padding: 10px;
//     border-radius: 999px;
//   }

//   .themeToggler:hover {
//     opacity: 1;
//   }

//   @keyframes fadeIn {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 0.5;
//     }
//   }
// `;

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
        className="bg-[#1f1f1f] dark:bg-white shadow-lg fixed left-[15px] bottom-[14px] w-[57px] h-[57px] cursor-pointer rounded-full p-[10px] !box-border"
        onClick={toggleTheme}
        size="xs"
        color={theme === 'light' ? '#fff' : '#1f1f1f'}
        icon={theme === 'light' ? faMoon : faSun}
      />

      <style jsx>
        {`
          .theme-toggler {
            position: fixed;
            left: 15px;
            bottom: 14px;
            height: 58px;
            width: 58px;
            z-index: 1000;
            cursor: pointer;
            animation: fadeIn 0.3s;
            outline: none;
            padding: 10px;
            border-radius: 999px;
          }

          .themeToggler:hover {
            opacity: 1;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ThemeToggler;
