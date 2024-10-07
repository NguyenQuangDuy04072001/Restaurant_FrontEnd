import classNames from "classnames/bind";
import styles from "./index.module.css";
import ImgItem from "~/assets/Images/item.png";
import { AddressIcon, EyeIcon } from "~/assets/Icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Items() {
  const testData = [
    "Dữ liệu nhà hàng",
    "Lịch mở bán",
    "Quản lý",
    "Báo cáo",
    "Đẩy tin",
    "Gim tin",
  ];

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div className={cx("head", "flex gap-4")}>
          <div className={cx("head-img")}>
            <img src={ImgItem} alt="" />
          </div>
          <div className={cx("head-info")}>
            <p className="text-xl font-bold ellipsis1">
              [01235]Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del
              Rey Hotel & Spa
            </p>
            <div className={cx("head-type", "flex items-center gap-2")}>
              <span className="text-xs">bánh mì</span>
              <p>Món việt, món nhật</p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="w-6 h-6">
                <AddressIcon />
              </div>
              <p className="ellipsis2">
                64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam
              </p>
            </div>
            <p className={cx("head-box")}>Đang hoạt động</p>
          </div>
          <div className={cx("preview", "flex items-center gap-2")}>
            <EyeIcon color="#136397" />
            <p className="primary">Xem trước</p>
          </div>
        </div>

        <div className={cx("py-4 flex items-center", 'body')}>
          {testData.map((item, index) => (
            <div key={index}>
              <Link>{item}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
