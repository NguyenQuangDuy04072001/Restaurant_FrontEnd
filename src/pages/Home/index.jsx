import classNames from "classnames/bind";
import styles from "./index.module.css";
import { Search } from "~/components/Layouts";
import { ItemPng, banner } from "~/assets/Images";
import { slickSlideType } from "~/contants/contants";
import CustomSlickSlider from "~/components/CustomSlickSlider";
import { ArrowNarrowRight } from "~/assets/Icons";
import { NewRestaurant } from "./components";
import LazyLoadComponent from "~/components/LazyLoadComponent";
import Evaluate from "../components/Evaluate";

const cx = classNames.bind(styles);

function HomePage() {
  const testArray = [1, 2, 3, 4, 5, 6];
  const dataNewRestaurant = [1, 2, 3, 4, 5, 6];

  const BusinessType = ({ item }) => (
    <div className={cx("slick-item")}>
      <img src={item.image} alt="" />
      <div className={cx("text-center")}>{item.title}</div>
    </div>
  );

  const featuredRestaurant = ({ item }) => (
    <div className={cx("featured-item", "flex mx-3")}>
      <img src={ItemPng} alt="item" />
      <div className={cx("featured-info", "p-4 flex flex-col gap-2")}>
        <p className={cx("font-bold", "ellipsis2")}>
          Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del Rey Hotel &
          Spa
        </p>
        <Evaluate />
        <p className="font-semibold text-lg text-right">50k -650k/người </p>
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
    <div className={cx("home")}>
      <LazyLoadComponent>
        <div className={cx("banner")}>
          <img src={banner} alt="" />
        </div>
      </LazyLoadComponent>

      <div className={cx("content")}>
        <div className={cx("content-main")}>
          <LazyLoadComponent>
            <div className={cx("search-layout")}>
              <Search />
            </div>
          </LazyLoadComponent>

          <div>
            <CustomSlickSlider
              SlideLayout={BusinessType}
              SlickSlideMap={slickSlideType}
            />
          </div>

          <LazyLoadComponent>
            <div className={cx("featured", "w-full")}>
              <h2 className={cx("general-title", "mb-10")}>Nhà hàng nổi bật</h2>
              <CustomSlickSlider
                SlideLayout={featuredRestaurant}
                SlickSlideMap={testArray}
                slidesToShow={2}
                slidesToScroll={2}
              />
            </div>
          </LazyLoadComponent>
          <LazyLoadComponent>
            <div>
              <h2 className={cx("general-title", "mb-10")}>Nhà hàng mới</h2>
              <div className="flex flex-wrap gap-6 mb-4">
                {dataNewRestaurant.map((item, index) => (
                  <div style={{ width: 382 }}>
                    <NewRestaurant key={index} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div
                  className={cx(
                    "flex rounded-lg items-center gap-1",
                    "see-more"
                  )}
                >
                  <p className="primary font-bold">Xem thêm</p>
                  <ArrowNarrowRight />
                </div>
              </div>
            </div>
          </LazyLoadComponent>
        </div>

        <div className={cx("recently", "py-10")}>
          <LazyLoadComponent>
            <div className={cx("recently-viewed")}>
              <h2 className={cx("general-title", "mb-10")}>Xem gần đây</h2>
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
    </div>
  );
}

export default HomePage;
