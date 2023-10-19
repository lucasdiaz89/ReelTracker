import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import LightImg from "../assets/theme-dark-light.png";
import DarkImg from "../assets/theme-light-dark.png";
import { useState, useEffect, useRef } from "react";


function ImageChangeTheme() {
    const imageTheme = useRef();
    const [isDark, setIsDark] = useState(() => {
        if (window.matchMedia("(prefers-color-schema:dark").matches) {
          return true;
        }
        return false;
      });
    
      const [isHover, setIsHover] = useState(false);
     
      const handleChangeTheme = () => {
        setIsDark(!isDark);
      };
    
      const handleChangeIconBW = () => {
        setIsHover(!isHover);
      };
    
      useEffect(() => {
        if (isDark) {
          document.body.classList.add("dark");
          imageTheme.current.src = isHover ? Sun : LightImg;
          imageTheme.current.title = isHover ? "Change Theme Light" : "";
        } else {
          document.body.classList.remove("dark");
          imageTheme.current.src = isHover ? Moon : DarkImg;
          imageTheme.current.title = isHover ? "Change Theme Dark" : "";
        }
      }, [isDark, isHover]);

    return (
    <>
      <img
        className="w-7 h-7"
        ref={imageTheme}
        onMouseEnter={() => handleChangeIconBW()}
        onMouseOut={() => handleChangeIconBW()}
        onClick={() => handleChangeTheme()}
      />
    </>
  );
}

export default ImageChangeTheme;
