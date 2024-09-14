import classNames from "classnames/bind";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function LoginPage() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  // Hàm xử lý khi click vào nút Sign Up
  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  // Hàm xử lý khi click vào nút Sign In
  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className={cx('body')}>
      <div
        className={cx("container", {
          "right-panel-active": isRightPanelActive,
        })}
      >
        <div className={cx("form-container", "sign-up-container")}>
          <form action="#">
            <h1 className={cx("h1")}>Create Account</h1>
            <div className={cx("social-container")}>
              <div className={cx("social")}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className={cx("social")}>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </div>
              <div className={cx("social")}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
            <span className={cx('span')}>or use your email for registration</span>
            <input className={cx('input')} type="text" placeholder="Name" />
            <input className={cx('input')} type="email" placeholder="Email" />
            <input className={cx('input')} type="password" placeholder="Password" />
            <button className={cx("button")}>Sign Up</button>
          </form>
        </div>

        <div className={cx("form-container", "sign-in-container")}>
          <form action="#">
            <h1 className={cx("h1")}>Sign in</h1>
            <div className={cx("social-container")}>
              <div className={cx("social")}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className={cx("social")}>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </div>
              <div className={cx("social")}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
            <span className={cx('span')}>or use your account</span>
            <input className={cx('input')} type="email" placeholder="Email" />
            <input className={cx('input')} type="password" placeholder="Password" />
            <a href="/">Forgot your password?</a>
            <button className={cx("button")}>Sign In</button>
          </form>
        </div>

        <div className={cx("overlay-container")}>
          <div className={cx("overlay")}>
            <div className={cx("overlay-panel", "overlay-left")}>
              <h1 className={cx("h1")}>Welcome Back!</h1>
              <p className={cx("p-txt")}>
                To keep connected with us please login with your personal info
              </p>
              <button className={cx("ghost")} onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className={cx("overlay-panel", "overlay-right")}>
              <h1 className={cx("h1")}>Hello, Friend!</h1>
              <p className={cx("txt")}>
                Enter your personal details and start journey with us
              </p>
              <button className={cx("button","ghost")} onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
