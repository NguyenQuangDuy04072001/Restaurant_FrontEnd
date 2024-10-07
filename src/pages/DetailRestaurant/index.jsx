import classNames from "classnames/bind";
import styles from "./index.module.css";
import { Search } from "~/components/Layouts";
import {
  AddressIcon,
  AlarmIcon,
  ChevronIcon,
  CoinIcon,
  HeartIcon,
  PhotoIcon,
} from "~/assets/Icons";
import Evaluate from "../components/Evaluate";
import { GioiThieu } from "~/contants/contants";
import { ItemPng, Map, Menu, Menu1, Menu2, Menu3 } from "~/assets/Images";
import { wife } from "~/assets/utilities_icons";
import { useState } from "react";
import { NewRestaurant } from "../Home/components";
import CustomSlickSlider from "~/components/CustomSlickSlider";
import ServiceOptions from "../components/ServiceOptions";

const cx = classNames.bind(styles);

function DetailRestaurant() {
  const monAn = [1, 1, 1, 1, 1, 1, 1, 1];

  const [like, setLike] = useState(monAn.map(() => false));

  const handleLike = (index) => {
    const newLikeList = [...like];
    newLikeList[index] = !newLikeList[index];
    setLike(newLikeList);
  };

  const testArray = [1, 2, 3, 4, 5, 6];
  const layoutItem = ({ item }) => (
    <div style={{ width: 386 }}>
      <NewRestaurant customCss={false} />
    </div>
  );

  return (
    <div className={cx("container", "background")}>
      <div className={cx("content")}>
        <div className={cx("mb-8", "search-layout")}>
          <Search />
        </div>
        <div className={cx("banner-title", "flex items-center gap-1 mb-8")}>
          <p>Trang chủ</p>
          <ChevronIcon />
          <p>Nhà hàng</p>
          <ChevronIcon />
          <p>Hà Nội</p>
          <ChevronIcon />
          <p>The Shells Resort & Spa Phú Quốc</p>
        </div>

        <div className={cx("detail")}>
          <div className={cx("head-detail")}>
            <h1>The Shells Resort & Spa Phú Quốc</h1>
            <div className="flex justify-between items-start">
              <div className={cx("head-detail-left")}>
                <div className="flex flex-col gap-2 mb-8">
                  <Evaluate />
                  <div className="flex gap-2 items-start">
                    <div className="w-6 h-6">
                      <AddressIcon />
                    </div>
                    <p className="ellipsis2">
                      64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlarmIcon />
                    <p className="success">Đang mở cửa</p>
                    <p>8:00 - 11:00 . 13:00 - 18:00</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CoinIcon />
                    <p>50k -650k/người </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-color mb-6 text-center">
                    Giới thiệu
                  </h3>
                  <p className="text-justify leading-7">{GioiThieu}</p>
                </div>
              </div>

              <div className={cx("head-detail-right")}>
                <div className="flex gap-6 mb-8">
                  <div>
                    <img
                      src={ItemPng}
                      alt=""
                      style={{
                        borderRadius: 8,
                        width: "290px",
                        height: "180px",
                        marginBottom: 24,
                      }}
                    />
                    <img
                      src={ItemPng}
                      alt=""
                      style={{
                        borderRadius: 8,
                        width: "290px",
                        height: "180px",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src={ItemPng}
                      alt=""
                      style={{
                        width: "290px",
                        height: "384px",
                        borderRadius: 8,
                      }}
                    />
                  </div>
                </div>
                <div className={cx("show-more-img")}>
                  <button className="flex gap-2">
                    <p className="primary font-medium">Xem thêm 12 bức ảnh</p>
                    <PhotoIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("main", "flex")}>
            <div className={cx("main-left")}>
              {/* Tiện nghi */}
              <div className={cx("amenities")}>
                <h3 className={cx("main-left-txt")}>Tiện Nghi</h3>
                <div className="flex gap-5 flex-wrap">
                  <div className={cx("amenities-container")}>
                    <div className={cx("amenities-image")}>
                      <img src={wife} alt="" />
                    </div>
                    <p className={cx("amenities-txt", "ellipsis2")}>
                      Free wifi
                    </p>
                  </div>

                  <div className={cx("amenities-container", "cursor-pointer")}>
                    <p className="primary">+</p>
                    <p className="ellipsis2 primary">12 tiện nghi</p>
                  </div>
                </div>
              </div>

              {/* Chính sách */}
              <div className={cx("policy")}>
                <h3 className={cx("main-left-txt")}>Chính sách</h3>
                <div className={cx("policy-txt")}>
                  <p>
                    Bàn đặt của Quý khách sẽ được giữ tối đa đến giờ đã đặt, sau
                    thời gian này nếu quý khách không đến và không thông báo bàn
                    đặt tự động hủy mà không cần thông báo trước
                  </p>
                  <p>
                    - Quý khách vui lòng thông báo cho Restaurant nếu điều chỉnh
                    số lượng khách thực tế hoặc muốn hủy bàn đặt trước ít nhất 2
                    tiếng để được hỗ trợ.
                  </p>
                  <p>
                    - Toàn bộ chi phí phát sinh Quý khách vui lòng thỏa thuận và
                    thanh toán với nhà hàng tại thời điểm sử dụng dịch vụ
                  </p>
                </div>
              </div>

              {/* Menu nhà hàng */}
              <div className={cx("restaurant-menu")}>
                <h3 className={cx("main-left-txt")}>Menu nhà hàng</h3>
                <div className={cx("restaurant-menu-img")}>
                  <img src={Menu} alt="" />
                  <img src={Menu1} alt="" />
                  <img src={Menu2} alt="" />
                  <img src={Menu3} alt="" />
                </div>
              </div>

              {/* Món ăn */}
              <div className={cx("food")}>
                <h3 className={cx("main-left-txt")}>Món ăn</h3>
                <div className={cx("food-container", "flex flex-wrap gap-5")}>
                  {monAn.map((item, index) => (
                    <div className={cx("food-content")} key={index}>
                      <img src={ItemPng} alt="" />
                      <p>Combo Sliver</p>
                      <button
                        className={cx("food-like")}
                        onClick={() => handleLike(index)}
                      >
                        <HeartIcon
                          fillOpacity={like[index] ? "1" : "0"}
                          fillColor="#DB242D"
                          strokeColor={like[index] ? "#DB242D" : "#48464A"}
                        />
                        {like[index] ? (
                          <p style={{ color: "#DB242D" }}>12</p>
                        ) : (
                          <p>Thích (12)</p>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center py-10">
                  <button className={cx("see-more")}>
                    <p>Xem thêm</p>
                  </button>
                </div>
              </div>
            </div>
            <div className={cx("main-right")}>
              <div className="ml-6">
                <div className="flex items-center gap-4 mb-6">
                  <ServiceOptions />
                </div>
                <p className={cx("contact")}>Liên hệ nhà hàng: 0342620743</p>
                <div className={cx("map")}>
                  <img src={Map} alt="map" />
                </div>
                <p className="ellipsis2">
                  64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam
                </p>
              </div>
            </div>
          </div>
          {/* Nhà hàng đề xuất */}
          <div className={cx("recommended")}>
            <h3 className="text-4xl font-bold mb-10">Nhà hàng được đề xuất</h3>
            <CustomSlickSlider
              SlideLayout={layoutItem}
              SlickSlideMap={testArray}
              slidesToShow={3}
              slidesToScroll={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRestaurant;
