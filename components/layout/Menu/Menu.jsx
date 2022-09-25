import Drawer from "./Drawer/Drawer";
import { useMediaQuery } from "react-responsive";

function Menu() {
  return (
    <>
      {useMediaQuery({ query: "(max-width:768px)" }) && <Drawer />}
      {useMediaQuery({ query: "(min-width:769px)" }) && null}
    </>
  );
}
export default Menu;
