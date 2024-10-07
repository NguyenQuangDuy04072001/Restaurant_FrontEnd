import { BagIcon, DeliveryIcon, FoodIcon } from "~/assets/Icons"

const ServiceOptions = () => {
    return (
        <>
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
        </>

    )
}

export default ServiceOptions