import classNames from "classnames/bind";
import styles from "./index.module.css";
import { Avatar } from "~/assets/Images";
import { KeyIcon, LogoutIcon, MessageQuestionIcon } from "~/assets/Icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function InfoDialog() {
  return (
    <div className={cx("info")}>
      <div className={cx("info-head")}>
        <div className={cx("flex items-center gap-2")}>
          <div className={cx("avatar")}>
            <img src={Avatar} alt="avatar" />
          </div>
          <div className={cx("info-user")}>
            <p className="ellipsis1">Nguyễn Quang Duy</p>
            <span>ID: 1234</span>
            <span className="ellipsis1">nqd2k1@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <div className={cx("option")}>
          <Link
            to={"/"}
            className={cx("flex gap-2 items-center", "option-item")}
          >
            <MessageQuestionIcon />
            <p>Hướng dẫn</p>
          </Link>
          <Link
            to={"/"}
            className={cx("flex gap-2 items-center", "option-item")}
          >
            <KeyIcon />
            <p>Đổi mật khẩu</p>
          </Link>
        </div>
        <Link to={"/"} className={cx("flex gap-2 items-center", "option-item")}>
          <p>Đăng xuất</p>
          <LogoutIcon />
        </Link>
      </div>
    </div>
  );
}

export default InfoDialog;
