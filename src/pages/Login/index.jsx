import classNames from "classnames/bind";
import styles from "./index.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGooglePlusG,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import backgroundImage from "~/assets/Images/login.png";
import { EyeIcon, EyeOffIcon } from "~/assets/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function LoginPage() {

  const [eye, setEye] = useState(true);

  const handleEyeClick = () => {
    setEye(!eye);
  };

  return (
    <div className={cx("container")}>
      <div
        className={cx("content")}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-1/2 flex items-center justify-center">
          <div className={cx("body", "flex flex-col items-center gap-6")}>
            <p className="text-lg">Bạn chưa có tài khoản?</p>
            <div className={cx("body-btn")}>
              <Link to="/register">Đăng ký</Link>
            </div>
          </div>
        </div>
        <div className={cx("layout")}>
          <h3 className="text-lg font-bold">Đăng nhập hệ thống</h3>
          <form>
            <div className="my-6">
              <div className={cx("form-input", "py-2 mb-12")}>
                <input type="text" placeholder="Email" />
              </div>
              <div className={cx("form-input", "py-2")}>
                <input
                  type={eye ? "password" : "text"}
                  placeholder="Password"
                />
                <div className={cx("form-icon")} onClick={handleEyeClick}>
                  {eye ? <EyeIcon /> : <EyeOffIcon />}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-16">
              <div className="w-5 h-5">
                <input type="checkbox" className="w-full h-full" />
              </div>
              <p>Ghi nhớ tài khoản</p>
            </div>
            <div className="w-full mb-10">
              <input
                type="button"
                value="Đăng nhập"
                className={cx("form-btn")}
              />
            </div>
            <p
              className={cx(
                "font-medium text-center cursor-pointer",
                "primary"
              )}
            >
              Quên mật khẩu
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
