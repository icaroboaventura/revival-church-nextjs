"use client";

import { useState, useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-box shadow-primary/25 hover:shadow-primary/30 fixed right-8 bottom-8 z-20 size-12 p-0 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <IconArrowUp className="text-primary-content size-6" />
        </button>
      )}
    </>
  );
};
