import styles from "./styles";

function Container({ children }) {
  return <div className={`${styles.container}`}>{children}</div>;
}

export default Container;
