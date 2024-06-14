import classNames from "classnames/bind";
import styles from "./index.module.css";
import { LocationIcon, SearchIcon } from "~/assets/Icons";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("search", "py-6 pl-4 pr-6 flex justify-between items-center")}>
      <div className={cx("search-input", 'flex items-center gap-4')}>
        <div className={cx("label")}>
          <div className="flex items-center gap-1">
            <LocationIcon />
            <p className="font-normal text-sm">Điểm đến</p>
          </div>
          <input type="text" placeholder="Thành phố" />
        </div>

        <div className={cx('line')}></div>

        <div className={cx("label")}>
          <div className="flex items-center gap-1">
            <SearchIcon />
            <p className="font-normal text-sm">Tìm kiếm</p>
          </div>
          <input type="text" placeholder="Tên nhà hàng, món ăn" />
        </div>
      </div>
      <button className={cx("search-button")}>
        <SearchIcon color="#FFFFFF"/>
      </button>
    </div>
  );
}

export default Search;
