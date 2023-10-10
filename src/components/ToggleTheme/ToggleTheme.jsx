import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from 'react';

const ToggleTheme = () => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClasses = document.documentElement.classList;
  useEffect(() => {
    systemPreference && document.documentElement.classList.add('dark');
  })

  const toggle = () => { 
    pageClasses.toggle('dark');
  }
  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-violet-800 dark:text-violet-300 text-3xl block dark:hidden cursor-pointer" onClick={toggle}/>
      <SunIcon className="h-8 text-violet-800 dark:text-violet-300 text-3xl hidden dark:block cursor-pointer" onClick={toggle}/>
    </div>
  );
};

export default ToggleTheme;