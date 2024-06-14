import classNames from "classnames/bind";
import styles from "./index.module.css";
import { ItemPng } from "~/assets/Images";
import { AddressIcon } from "~/assets/Icons";
import { Evaluate } from "..";

const cx = classNames.bind(styles);

function RecentlyViewedRestaurants() {
  return (
    <div className={cx("item")}>
      <div className={cx("item-image")}>
        <img src={ItemPng} alt="" />
      </div>
      <div className={cx("py-4 px-2 flex flex-col gap-2")}>
        <p className="ellipsis2 font-bold text-lg cursor-pointer">
          Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del Rey Hotel &
          Spa
        </p>
        <Evaluate />
        <div className="flex gap-2 items-start">
          <div className="w-6 h-6">
            <AddressIcon />
          </div>
          <p className="ellipsis2">
            64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewedRestaurants;
