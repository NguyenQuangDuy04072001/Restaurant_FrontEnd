import classNames from "classnames/bind";
import styles from "../index.module.css";

import { ItemPng } from "~/assets/Images";
import { AddressIcon, InfoCircleIcon } from "~/assets/Icons";
import ServiceOptions from "~/pages/components/ServiceOptions";
import RestaurantHoursDialog from "~/pages/components/Dialog/RestaurantHoursDialog";
import Evaluate from "~/pages/components/Evaluate";
const cx = classNames.bind(styles);

const SearchItem = () => {
  return (
    <div className={cx("item")}>
      <div className={cx('image_image')}>
        <div className={cx("image")}>
          <img src={ItemPng} alt="" />
        </div>
      </div>
      <div className={cx("info")}>
        <div className="flex justify-between">
          <div className={cx("info-head", "flex items-center gap-2")}>
            <span className="text-xs">Bánh mì</span>
            <p>Món việt, món Nhật</p>
          </div>
          <div className="flex gap-2">
            <p>Giờ mở cửa</p>
            <div className={cx("relative", 'hover_dialog')}>
              <InfoCircleIcon />
              <div className={cx("absolute right-0", 'dialog')}>
                <RestaurantHoursDialog />
              </div>
            </div>
          </div>
        </div>
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
        <div className="flex items-center gap-4">
          <ServiceOptions />
        </div>
        <p className="leading-7 text-right">
          <span className="font-semibold">50k - 650k</span>/người
        </p>
      </div>
    </div>
  );
};

export default SearchItem;
