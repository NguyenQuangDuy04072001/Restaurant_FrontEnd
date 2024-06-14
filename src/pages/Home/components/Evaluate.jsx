import { StarIcon, WritingIcon } from "~/assets/Icons";
import PropTypes from "prop-types";

function Evaluate({point, reviews}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <WritingIcon />
        <span className="error font-bold">4.2</span>
        <StarIcon />
      </div>
      <span className="text-color">Great</span>
      <span className="gray7-color">(124 reviews)</span>
    </div>
  );
}

Evaluate.prototype = {
  point: PropTypes.string.isRequired,
  reviews: PropTypes.string
}

export default Evaluate;
