import { BiSun, BiMenu, BiCart, BiMoon } from "react-icons/bi";
import { RiMoonFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import styles from "./styles";
import Search from "./Search";
import { toggleDrawer } from "../../../redux/slices/uiSlice";
import { useTheme } from "../../../hooks";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.header} dark:bg-gray-800 md:grid-cols-[1fr_1fr_1fr_1fr_auto_auto]`}
    >
      {/* TOGGLE MENU */}
      <div
        onClick={() => {
          dispatch(toggleDrawer());
        }}
        className={`col-span-2 cursor-pointer justify-self-start text-[1.75rem] md:hidden`}
      >
        <BiMenu />
      </div>

      {/* LOGO */}
      <h2 className={`${styles.logo}`}>TechnoTool</h2>

      {/* THEME ICON */}
      <div
        onClick={() => toggleTheme()}
        className={`col-span-2 cursor-pointer justify-self-end  rounded-full bg-gray-300 p-2 text-[1.75rem]  md:col-span-1 md:col-start-6 md:justify-self-start `}
      >
        {theme === "light" ? <BiMoon /> : <BiSun />}
      </div>

      {/* SEARCH */}
      <Search />

      {/* CART ICON */}
      <button
        className={` col-span-1  flex cursor-pointer justify-center text-[2.2rem] md:col-start-5 md:row-start-1 md:justify-self-end`}
      >
        <BiCart />
      </button>
    </header>
  );
}

export default Header;
