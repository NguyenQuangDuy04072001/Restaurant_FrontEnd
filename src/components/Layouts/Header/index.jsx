import classNames from "classnames/bind";
import styles from "./index.module.css";
import { BellIcon, HelpIcon } from "~/assets/Icons";
import { Link } from "react-router-dom";
import { listOfPages } from "~/contants/contants";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className="w-full py-5 px-10">
      <div className="flex justify-between items-center">
        <p className={cx("title")}>Restaurant</p>
        <div className="flex items-center">
          <div className="flex gap-6 mr-8">
            <HelpIcon />
            <BellIcon />
          </div>
          <div className={cx("flex gap-2")}>
            <button className={cx("login")}>Đăng nhập</button>
            <button className={cx("register")}>Đăng ký</button>
          </div>
        </div>
      </div>

      <div className={cx("navigate")}>
        {listOfPages.map((page, index) => (
          <Link key={index} to={page.path} className={cx({ active: page.active })}>{page.label}</Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
