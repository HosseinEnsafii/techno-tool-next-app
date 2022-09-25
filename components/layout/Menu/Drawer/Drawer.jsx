import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import styles from "../styles";
import { closeDrawer } from "../../../../redux/slices/uiSlice";
import { BiX } from "react-icons/bi";
import { menu } from "../../../../config/constants";
import DropDown from "./DropDown";
import { useUiState } from "../../../../hooks";
import { Backdrop } from "../../../shared";
import useBrowser from "../../../../hooks/useBrowser";

function Drawer() {
  const { openDrawer } = useUiState();
  const dispatch = useDispatch();

  const { isBrowser } = useBrowser();
  if (isBrowser) {
    return createPortal(
      <>
        <Backdrop
          active={openDrawer}
          onClick={() => {
            dispatch(closeDrawer());
          }}
        />
        <aside className={`${styles.drawer} ${openDrawer ? styles.openDrawer : ""}`}>
          {/* CLOSE ICON */}
          <button onClick={() => dispatch(closeDrawer())} className={`${styles.closeBtn}`}>
            <BiX className="h-[1.875rem] w-[1.875rem] " />
          </button>

          {/* LOGO */}
          <h1 className="mt-[1.75rem] mb-2 text-center text-[1.75rem] font-bold leading-none tracking-tight text-red-500">
            technoTool
          </h1>
          <hr />

          <ul className="mt-4 flex flex-col items-center gap-2 ">
            {menu.map((item, i) => (
              <DropDown key={i} item={item} />
            ))}
          </ul>
        </aside>
      </>,
      document.querySelector("#overlays")
    );
  } else null;
}
export default Drawer;
