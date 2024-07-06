import classNames from "classnames/bind";
import styles from "../index.module.css";

import { ItemPng } from "~/assets/Images";
import { InfoCircleIcon } from "~/assets/Icons";
const cx = classNames.bind(styles);

const SearchItem = () => {
  return (
    <div className={cx("item")}>
      <div className={cx("item_image")}>
        <img src={ItemPng} alt="" />
      </div>
      <div className={cx("info")}>
        <div className="flex justify-between">
          <div className={cx("info-head", "flex items-center gap-2")}>
            <span className="text-xs">Bánh mì</span>
            <p>Món việt, món Nhật</p>
          </div>
          <div className="flex gap-2">
            <p>Giờ mở cửa</p>
            <InfoCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
