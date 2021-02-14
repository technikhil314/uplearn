import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import styles from "./toaster.module.scss";
export default function Toast() {
  const { showToast, message, id, state } = useSelector((state) => state.toast);
  return ReactDOM.createPortal(
    showToast ? (
      <div className={`${state} ${styles.toast}`} id={id}>
        {message}
      </div>
    ) : null,
    document.getElementById("toast")
  );
}
