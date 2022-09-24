import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import useUiState from "../../../../hooks/state/useUiState";
import Backdrop from "../../../shared/Backdrop/Backdrop";
import styles from "../styles";
import { uiActions } from "../../../../redux/slices/uiSlice";
import { BiX } from "react-icons/bi";
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
        <aside className={`${styles.drawer} ${openDrawer ? styles.openDrawer : ""}`}></aside>
      </>,
      document.querySelector("#overlays")
    );
  } else null;
}
export default Drawer;
