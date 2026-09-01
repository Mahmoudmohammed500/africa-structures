import { useState } from "react";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };


  return (
    <>
      <header className="site-header">
        <HeaderTop />
      </header>

      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />
    </>
  );
}