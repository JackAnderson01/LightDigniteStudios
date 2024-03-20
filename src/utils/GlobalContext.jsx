import React, { createContext, useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (link) => {
    // navigate("/home");
    const scrollToElement = () => {
      const elem = document.getElementById(link);

      if (elem) {
        setIsOpen(false);
        elem.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    // Navigate to the root path

    // Scroll to the element after a delay
    const timeoutId = setTimeout(scrollToElement, 1000);

    // Clean up the timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  };

  // Theme Toggle
  const [theme, setTheme] = useState("light");
  const [palette, setPalette] = useState({
    brand: "#F85E00",
    background: "#fff",
    dark_contrast_background: "#F5F5F5",
    light_contrast_background: "#F9F9F9",
    color: "#0E0E0E",
    dark_contrast_color: "#1C1C1C",
    light_contrast_color: "#808080",
  });

  useEffect(() => {
    if (theme == "dark") {
      setPalette({
        brand: "#F85E00",
        background: "#000",
        dark_contrast_background: "#1c1c1c",
        light_contrast_background: "#323232",
        color: "#fff",
        dark_contrast_color: "#e0e0e0",
        light_contrast_color: "#959595",
      });
    } else {
      setPalette({
        brand: "#F85E00",
        background: "#fff",
        dark_contrast_background: "#F5F5F5",
        light_contrast_background: "#F9F9F9",
        color: "#0E0E0E",
        dark_contrast_color: "#1C1C1C",
        light_contrast_color: "#808080",
      });
    }
  }, [theme]);

  return (
    <GlobalContext.Provider
      value={{
        // Theme
        palette,
        theme,
        setTheme,
        navigateTo,
        isOpen,
        setIsOpen,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
