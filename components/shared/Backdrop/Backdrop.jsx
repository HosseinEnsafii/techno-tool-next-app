import { useEffect } from "react";
import styles from "../styles";

const Backdrop = ({ onClick, active }) => {
  return <div onClick={onClick} className={`${active ? styles.backdrop : "select-none"}`}></div>;
};

export default Backdrop;
