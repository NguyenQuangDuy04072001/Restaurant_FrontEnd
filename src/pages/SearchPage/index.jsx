import classNames from "classnames/bind";
import styles from "./index.module.css";
import { Search } from "~/components/Layouts";
import {
  BusinessplanIcon,
  ChevronIcon,
  FilterIcon,
  MedalIcon,
  ShredderIcon,
  StarIcon,
  WritingIcon,
} from "~/assets/Icons";
import { useState } from "react";
import LableSidebar from "./components/LableSidebar";
import {
  Cuisine,
  Distance,
  Meal,
  OpenSections,
  RestaurantOpen,
  RestaurantType,
  Voucher,
  restaurantService,
  reviews,
} from "~/contants/contants";
import SearchItem from "./components/SearchItem";
import { ItemPng } from "~/assets/Images";
import CustomSlickSlider from "~/components/CustomSlickSlider";
import { NewRestaurant } from "../Home/components";
import LazyLoadComponent from "~/components/LazyLoadComponent";

const cx = classNames.bind(styles);

function SearchPage() {
  const [openSections, setOpenSections] = useState(OpenSections);
  const [currentValue, setCurrentValue] = useState(0);
  const min = 0;
  const max = 5000000;

  const formatNumber = (number) => {
    return number.toLocaleString("vi-VN");
  };

  const handleValuePrice = (e) => {
    const value = e.target.value;
    setCurrentValue(parseInt(value));
  };

  const handleToggle = (section) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const testArray = [1, 2, 3, 4, 5, 6];
  const restaurantsAround = ({ item }) => (
    <div className={cx("restaurants_around", "mx-2")}>
      <div className={cx("restaurants_around-item")}>
        <div className={cx("restaurants_around-img", "mb-4")}>
          <img src={ItemPng} alt="" />
        </div>
        <p className="text-lg font-bold mb-2 ellipsis2">
          Richico Apartments And Hotel
        </p>
        <span>14 m</span>
      </div>
    </div>
  );

  const recentlyViewedRestaurants = ({ item }) => (
    <div style={{ width: 284 }}>
      <NewRestaurant
        heartIcon={false}
        types={false}
        serviceOptions={false}
        price={false}
        customCss={false}
      />
    </div>
  );

  return (
    <div className={cx("container", "background")}>
      <div className={cx("content")}>
        <div className={cx("mb-8", "search-layout")}>
          <Search />
        </div>
        <div className="mb-8">
          <div className={cx("banner-title", "flex items-center gap-1 mb-6")}>
            <p>Trang chủ</p>
            <ChevronIcon />
            <p>Nhà hàng</p>
            <ChevronIcon />
            <p>Hà Nội</p>
          </div>
          <div className={cx("title")}>
            <h1>Nhà hàng tại Hà Nội</h1>
            <p className="text-2xl font-semibold">156 Nhà hàng tại Hà Nội</p>
          </div>
        </div>

        <div className="flex mb-16">
          <div className={cx("content-left", "mr-6")}>
            <div className={cx("flex items-center p-4 gap-2", "border-b")}>
              <FilterIcon />
              <p className="text-lg font-bold">Bộ lọc</p>
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Khoảng giá (đ/ đêm)"
                icon={<BusinessplanIcon />}
                onClick={() => handleToggle("price")}
                rotateIcon={openSections.price}
              />
              {openSections.price && (
                <div className="mt-6">
                  <div className="mb-4">
                    {min} đ - {formatNumber(currentValue)} đ
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    className="w-full mb-4"
                    onChange={(event) => handleValuePrice(event)}
                  />
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Đánh giá nhà hàng"
                icon={<WritingIcon color="#1C1B1E" />}
                onClick={() => handleToggle("reviews")}
                rotateIcon={openSections.reviews}
              />
              {openSections.reviews && (
                <div className="flex flex-col gap-4 mt-6">
                  {reviews.map((item, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <div className="flex items-center gap-2">
                        {Array.from({ length: item }).map((_, starIndex) => (
                          <StarIcon width={22} height={22} key={starIndex} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Dịch vụ"
                icon={<ShredderIcon />}
                onClick={() => handleToggle("restaurantService")}
                rotateIcon={openSections.restaurantService}
              />
              {openSections.restaurantService && (
                <div className="flex flex-col gap-4 mt-6">
                  {restaurantService.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Voucher"
                icon={<WritingIcon color="#1C1B1E" />}
                onClick={() => handleToggle("voucher")}
                rotateIcon={openSections.voucher}
              />
              {openSections.voucher && (
                <div className="flex flex-col gap-4 mt-6">
                  {Voucher.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Open"
                icon={<MedalIcon />}
                onClick={() => handleToggle("restaurantOpen")}
                rotateIcon={openSections.restaurantOpen}
              />
              {openSections.restaurantOpen && (
                <div className="flex flex-col gap-4 mt-6">
                  {RestaurantOpen.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Distance"
                icon={<MedalIcon />}
                onClick={() => handleToggle("distance")}
                rotateIcon={openSections.distance}
              />
              {openSections.distance && (
                <div className="flex flex-col gap-4 mt-6">
                  {Distance.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Cuisine"
                icon={<MedalIcon />}
                onClick={() => handleToggle("cuisine")}
                rotateIcon={openSections.cuisine}
              />
              {openSections.cuisine && (
                <div className="flex flex-col gap-4 mt-6">
                  {Cuisine.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4", "border-b")}>
              <LableSidebar
                title="Restaurant Type"
                icon={<MedalIcon />}
                onClick={() => handleToggle("restaurantType")}
                rotateIcon={openSections.restaurantType}
              />
              {openSections.restaurantType && (
                <div className="flex flex-col gap-4 mt-6">
                  {RestaurantType.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx("p-4")}>
              <LableSidebar
                title="Meal"
                icon={<MedalIcon />}
                onClick={() => handleToggle("meal")}
                rotateIcon={openSections.meal}
              />
              {openSections.meal && (
                <div className="flex flex-col gap-4 mt-6">
                  {Meal.map((item, index) => (
                    <div className="flex items-start gap-2" key={index}>
                      <input
                        type="checkbox"
                        style={{ width: 20, height: 20 }}
                      />
                      <p className="leading-5 w-10/12">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={cx("content-right")}>
            <div className={cx("flex flex-col gap-7")}>
              {Array.from({ length: 10 }).map((_, index) => (
                <SearchItem key={index} />
              ))}
            </div>
            <div className={cx("pagination", "flex gap-6 justify-end mt-10")}>
              <div className={cx("pagination-item")}>
                <ChevronIcon />
              </div>
              <div className={cx("pagination-item", "pagination-active")}>
                1
              </div>
              <div className={cx("pagination-item")}>2</div>
              <div className={cx("pagination-item")}>3</div>
              <div className={cx("pagination-item")}>
                <ChevronIcon />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-10">
            Restaurants around the Homestay
          </h2>
          <CustomSlickSlider
            SlideLayout={restaurantsAround}
            SlickSlideMap={testArray}
            slidesToShow={6}
            slidesToScroll={1}
          />
        </div>
      </div>

      <div className={cx("recently", "py-10 mt-16")}>
        <LazyLoadComponent>
          <div className={cx("recently-viewed")}>
            <h2 className={cx("general-title", "mb-10")}>Recently Viewed</h2>
            <CustomSlickSlider
              SlideLayout={recentlyViewedRestaurants}
              SlickSlideMap={testArray}
              slidesToShow={4}
              slidesToScroll={1}
            />
          </div>
        </LazyLoadComponent>
      </div>
    </div>
  );
}

export default SearchPage;
