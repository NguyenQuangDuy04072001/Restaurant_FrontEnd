import classNames from "classnames/bind";
import styles from "./index.module.css";
import { businessHours } from "~/contants/contants";

const cx = classNames.bind(styles);

const RestaurantHoursDialog = () => {
    return (
        <div className={cx('container')}>
            <h3 className="mb-4 text-xl font-semibold text-color ">Giờ mở cửa</h3>
            <div className="flex flex-col gap-4">
                {businessHours.map((item, index) => (
                    <div className="w-full flex" key={index}>
                        <p className="w50percent">{item.title}</p>
                        <p className="w50percent">{item.timeStart} - {item.timeEnd}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantHoursDialog;