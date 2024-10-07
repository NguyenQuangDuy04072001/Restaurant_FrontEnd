import classNames from "classnames/bind";
import styles from "./index.module.css";
import { SearchIcon } from "~/assets/Icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '~/custom.css'
import Items from "./components/Items";
import ItemSecond from "./components/ItemSecond";

const cx = classNames.bind(styles);

function ManagerHomepage() {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div
          className={cx(
            "content-head",
            "flex justify-between items-center mb-10"
          )}
        >
          <div className={cx("head-input")}>
            <input type="text" placeholder="Tìm kiếm tên nhà hàng" />
            <div className={cx("head-input-icon")}>
              <SearchIcon width={24} height={24} color="#939094" />
            </div>
          </div>
          <button className={cx("btn-add")}>+ Tạo mới</button>
        </div>

        <div className={cx("content-body")}>
          <h1 className="text-3xl font-bold mb-6">
            Danh sách nhà hàng đang quản lý
          </h1>
          <div className={cx('content-tab')}>
            <Tabs>
              <TabList>
                <Tab>Đang hoạt động</Tab>
                <Tab>Đang hoàn thiện</Tab>
                <Tab>Ngừng hoạt động</Tab>
              </TabList>

              <TabPanel>
                <Items />
              </TabPanel>
              <TabPanel>
                <ItemSecond />
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerHomepage;
