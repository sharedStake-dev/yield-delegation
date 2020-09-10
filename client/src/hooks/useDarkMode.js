import {useContext} from 'react';
import {DarkModeContext} from '../context/DarkModeContext';

export const useDarkMode = () => {
  const {isDarkMode, setDarkMode} = useContext(DarkModeContext);
  return [isDarkMode, setDarkMode];
};
