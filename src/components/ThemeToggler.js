import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'twin.macro';
const ThemeTogglerWrapper = styled.div`
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
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
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
`;

export const ThemeToggler = ({ toggleTheme, theme }) => {
  return (
    <ThemeTogglerWrapper>
      <FontAwesomeIcon
        className="theme-toggler"
        onClick={toggleTheme}
        size="7x"
        color={theme === 'light' ? '#fff' : '#1f1f1f'}
        icon={theme === 'light' ? faMoon : faSun}
      />
    </ThemeTogglerWrapper>
  );
};

export default ThemeToggler;
