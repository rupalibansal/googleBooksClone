import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default Layout;
