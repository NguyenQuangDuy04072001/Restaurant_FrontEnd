import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrowSlick } from "../CustomArrowSlick";
import { SlickLeft, SlickRight } from "~/assets/Images";

const CustomSlickSlider = React.memo(
  ({ SlideLayout, SlickSlideMap, dots = false, slidesToShow = 8, slidesToScroll = 2 }) => {
    var settings = {
      dots: dots,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      nextArrow: <CustomArrowSlick src={SlickRight}/>,
      prevArrow: <CustomArrowSlick src={SlickLeft}/>,
    };
    return (
      <Slider {...settings}>
        {SlickSlideMap.map((item, index) => (
          <SlideLayout key={index} item={item} />
        ))}
      </Slider>
    );
  }
);

CustomSlickSlider.propTypes = {
  SlideLayout: PropTypes.elementType,
  SlickSlideMap: PropTypes.arrayOf(PropTypes.any).isRequired,
  dots: PropTypes.bool,
};

export default CustomSlickSlider;
