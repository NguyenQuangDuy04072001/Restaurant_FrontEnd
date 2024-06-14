import classNames from "classnames/bind";
import styles from "./index.module.css";
import { ItemPng } from "~/assets/Images";
import Evaluate from "../Evaluate";
import {
  AddressIcon,
  BagIcon,
  DeliveryIcon,
  FoodIcon,
  HeartIcon,
} from "~/assets/Icons";

const cx = classNames.bind(styles);

function NewRestaurant() {
  return (
    <div className={cx("item")}>
      <div className={cx("item-image", "relative")}>
        <img src={ItemPng} alt="" />
        <div className="absolute top-0 right-0 p-4 cursor-pointer">
          <HeartIcon />
        </div>
      </div>
      <div className={cx("info", "p-2 flex flex-col gap-2")}>
        <div className={cx("info-head", "flex items-center gap-2")}>
          <span className="text-xs">Bánh mì</span>
          <p>Món việt, món Nhật</p>
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
          <div className="p-1 flex items-center gap-2 rounded-lg warning-bg">
            <FoodIcon />
            <p className="warning">Đặt bàn</p>
          </div>
          <div className="p-1 flex items-center gap-2 rounded-lg success-bg">
            <DeliveryIcon />
            <p className="success">Giao món</p>
          </div>
          <div className="p-1 flex items-center gap-2 rounded-lg error-bg">
            <BagIcon />
            <p className="error">Lấy hàng</p>
          </div>
        </div>
        <p className="leading-7 text-right">
          <span className="error font-semibold">50k - 650k</span>/người
        </p>
      </div>
    </div>
  );
}

export default NewRestaurant;
