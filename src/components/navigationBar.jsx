import logo from "../assets/images/logo.jpg";
import styles from "./navigationBar.module.scss";

const NavigationBar = (params) => {
  return (
    <nav className={styles.section}>
      <img alt="" className={styles.logo} src={logo}></img>
    </nav>
  );
};

export default NavigationBar;
