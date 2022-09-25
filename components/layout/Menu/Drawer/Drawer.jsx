import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import useUiState from "../../../../hooks/state/useUiState";
import Backdrop from "../../../shared/Backdrop/Backdrop";
import styles from "../styles";
import { uiActions } from "../../../../redux/slices/uiSlice";
import { BiX } from "react-icons/bi";
import { menu } from "../../../../config/constants";
import DropDown from "./DropDown";
function Drawer() {
  const [isBrowser, setIsBrowser] = useState(false);
  const { openDrawer } = useUiState();
  const dispatch = useDispatch();
  const { closeDrawer } = uiActions;

  console.log(openDrawer);
  useEffect(() => {
    setIsBrowser(true); // set statement true if page rendered
  });

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
          <button
            onClick={() => dispatch(uiActions.closeDrawer())}
            className={`${styles.closeBtn}`}
          >
            <BiX className="h-[1.875rem] w-[1.875rem] " />
          </button>

          {/* LOGO */}
          <h1 className="mt-[1.75rem] mb-2 text-center text-[1.75rem] font-bold leading-none tracking-tight text-red-500">
            technoTool
          </h1>
          <hr />

          <ul className="mt-4 flex flex-col items-center gap-2 ">
            {menu.map((item) => (
              <DropDown item={item} />
            ))}
          </ul>
        </aside>
      </>,
      document.querySelector("#overlays")
    );
  } else null;
}
export default Drawer;
