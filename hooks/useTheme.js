import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme as setThemeAction } from "../redux/slices/uiSlice";
import useBrowser from "./useBrowser";

const useTheme = () => {
  const dispatch = useDispatch();
  const { isBrowser } = useBrowser();

  const [theme, setTheme] = useState(function () {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      } else return "light";
    }
  });

  const toggleTheme = () => setTheme((curTheme) => (curTheme === "light" ? "dark" : "light"));

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    document.querySelector("body").classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    dispatch(setThemeAction(theme));
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
