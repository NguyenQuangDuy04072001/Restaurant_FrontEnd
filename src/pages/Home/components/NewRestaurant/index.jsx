import classNames from "classnames/bind";
import styles from "./index.module.css";
import { ItemPng } from "~/assets/Images";
import { AddressIcon, HeartIcon } from "~/assets/Icons";
import ServiceOptions from "~/pages/components/ServiceOptions";
import Evaluate from "~/pages/components/Evaluate";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function NewRestaurant({ heartIcon = true, types = true, serviceOptions = true, price = true, customCss = true }) {
  return (
    <div className={cx("item", { customCss: customCss, "mx-3": !customCss })}>
      <div className={cx("item-image", "relative")}>
        <img src={ItemPng} alt="" />
        {heartIcon ? (
          <div className="absolute top-0 right-0 p-4 cursor-pointer">
            <HeartIcon />
          </div>
        ) : null}
      </div>
      <div className={cx("info", "p-2 flex flex-col gap-2")}>
        {types ? (
          <div className={cx("info-head", "flex items-center gap-2")}>
            <span className="text-xs">Bánh mì</span>
            <p>Món việt, món Nhật</p>
          </div>
        ) : null}

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
        {serviceOptions ? (
          <div className="flex items-center gap-4">
            <ServiceOptions />
          </div>
        ) : null}
        {price ? (
          <p className="leading-7 text-right">
            <span className="error font-semibold">50k - 650k</span>/người
          </p>
        ) : null}
      </div>
    </div>
  );
}

NewRestaurant.propTypes = {
  heartIcon: PropTypes.bool,
  types: PropTypes.bool,
  serviceOptions: PropTypes.bool,
  price: PropTypes.bool,
  customCss: PropTypes.bool
};
export default NewRestaurant;
