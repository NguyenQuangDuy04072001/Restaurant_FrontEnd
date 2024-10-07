import classNames from "classnames/bind";
import styles from "../index.module.css";
import { ChevronIcon } from "~/assets/Icons";
const cx = classNames.bind(styles);

function LableSidebar({ title, icon, onClick, rotateIcon = true }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-lg font-bold">{title}</p>
      </div>
      <button
        className={cx("cursor-pointer", rotateIcon ? "rotate-minus90" : "rotate-90")}
        onClick={onClick}
      >
        <ChevronIcon />
      </button>
    </div>
  );
}

export default LableSidebar;
