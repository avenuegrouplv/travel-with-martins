import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll immediately on path change to ensure starting at top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
