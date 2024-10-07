import classNames from "classnames/bind";
import styles from "./index.module.css";
import { listOfManagementPages } from "~/contants/contants";
import { Link } from "react-router-dom";
import { ArrowIcon, BellIcon, HelpIcon } from "~/assets/Icons";
import { Avatar } from "~/assets/Images";
import InfoDialog from "~/components/Dialog/InfoDialog";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function ManagerLayout({ children }) {
  const [infoDialog, setInfoDialog] = useState(false);
  const dialogRef = useRef(null);
  const arrowIconRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target) &&
      arrowIconRef.current &&
      !arrowIconRef.current.contains(event.target)
    ) {
      setInfoDialog(false);
    }
  };

  useEffect(() => {
    if (infoDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [infoDialog]);

  return (
    <div className={cx("manager")}>
      <div className={cx("header")}>
        <div className="flex items-center gap-6">
          <p className={cx("title")}>Restaurant</p>
          <div className={cx("navigate")}>
            {listOfManagementPages.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={cx({ active: item.active })}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 relative">
          <div className="flex gap-6">
            <HelpIcon />
            <BellIcon />
          </div>
          <div className={cx("info", "flex items-center")}>
            <div className={cx("info-avatar")}>
              <img src={Avatar} alt="avatar" />
            </div>
            <button
              ref={arrowIconRef}
              className="cursor-pointer"
              onClick={() => {
                setInfoDialog(!infoDialog);
              }}
            >
              <ArrowIcon />
            </button>
          </div>
          {infoDialog && (
            <div ref={dialogRef} className={cx("info-dialog")}>
              <InfoDialog />
            </div>
          )}
        </div>
      </div>
      <div className={cx("body")}>{children}</div>
    </div>
  );
}

export default ManagerLayout;
