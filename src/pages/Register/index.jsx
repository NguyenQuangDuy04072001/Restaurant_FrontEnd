import classNames from "classnames/bind";
import styles from "./index.module.css";
import backgroundImage from "~/assets/Images/login.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "~/assets/Icons";
const cx = classNames.bind(styles);

function RegisterPage() {
  const [selectedOption, setSelectedOption] = useState("0");
  const [eyes, setEyes] = useState([true, true]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEyeClick = (index) => {
    setEyes((prev) => {
      const newEyes = [...prev];
      newEyes[index] = !newEyes[index];
      return newEyes;
    });
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
            <p className="text-lg">Bạn đã có tài khoản?</p>
            <div className={cx("body-btn")}>
              <Link to="/login">Đăng nhập</Link>
            </div>
          </div>
        </div>
        <div className={cx("layout")}>
          <h3 className="text-lg font-bold mb-4">Đăng ký</h3>
          <form>
            <div className={cx("form-input")}>
              <input type="text" placeholder="Email" />
            </div>
            <div
              className={cx(
                "form-input",
                "padding-right",
                "relative flex items-center"
              )}
            >
              <input type={eyes[0] ? "password" : 'text'} placeholder="Password" />
              <div
                className={cx("form-icon")}
                onClick={() => handleEyeClick(0)}
              >
                {eyes[0] ? <EyeIcon /> : <EyeOffIcon />}
              </div>
            </div>
            <div
              className={cx(
                "form-input",
                "padding-right",
                "relative flex items-center"
              )}
            >
              <input type={eyes[1] ? "password" : 'text'} placeholder="Nhập lại mật khẩu" />
              <div
                className={cx("form-icon")}
                onClick={() => handleEyeClick(1)}
              >
                {eyes[1] ? <EyeIcon /> : <EyeOffIcon />}
              </div>
            </div>
            <div className={cx("form-input")}>
              <input type="text" placeholder="Họ và tên" />
            </div>
            <div className={cx("form-input")}>
              <input type="number" placeholder="Số điện thoại" />
            </div>
            <section className={cx("form-section")}>
              <select
                value={selectedOption}
                className={cx("form-select")}
                onChange={handleSelectChange}
              >
                <option value="0">Khách hàng</option>
                <option value="1">Hợp tác</option>
              </select>
            </section>
            <div className="w-full">
              <input type="button" value="Đăng ký" className={cx("form-btn")} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
