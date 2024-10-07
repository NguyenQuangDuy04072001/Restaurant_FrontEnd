import classNames from "classnames/bind";
import styles from "./index.module.css";
import ImgItem from "~/assets/Images/item.png";
import { TranshCanIcon } from "~/assets/Icons";

const cx = classNames.bind(styles);

function ItemSecond() {
  return (
    <div className={cx("container")}>
      <div className={cx("content", "flex gap-4")}>
        <div className={cx("head-img")}>
          <img src={ImgItem} alt="" />
        </div>
        <div className={cx("body", 'flex flex-col justify-between')}>
          <p className="text-xl font-bold ellipsis2">
            The Shells Resort & Spa Phú Quốc, The Shells Resort & Spa Phú Quốc
          </p>
          <div className={cx("body-sub", 'flex items-center justify-between')}>
            <p className="text-xs">50%</p>
            <div className={cx('body-sub-second', 'flex items-center gap-4')}>
              <div className="cursor-pointer">
                <TranshCanIcon />
              </div>
              <button>Tiếp tục</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSecond;
