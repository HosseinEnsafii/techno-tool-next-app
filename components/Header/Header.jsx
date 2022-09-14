import { BiSun, BiMenu, BiCart } from "react-icons/bi";
import { RiMoonFill } from "react-icons/ri";
import styles from "./styles";
import Search from "./Search";

const theme = "light";
function Header() {
  return (
    <header className={`${styles.header} `}>
      {/* TOGGLE MENU */}
      <button className={`col-span-2 cursor-pointer text-[1.75rem] md:hidden`}>
        <BiMenu />
      </button>

      {/* LOGO */}
      <h2 className={`${styles.logo} col-span-2 md:col-span-1`}>TechnoTool</h2>

      {/* THEME ICON */}
      <button
        className={`col-span-2 cursor-pointer justify-self-end  rounded-full bg-gray-300 p-2 text-[1.75rem]  md:col-span-1 md:col-start-6 md:justify-self-start `}
      >
        {theme === "light" ? <RiMoonFill /> : <BiSun />}
      </button>

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
