import PropTypes from "prop-types";

export default function TypeFileInfo({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage"> {percentage} %</span>
    </li>
  );
}

TypeFileInfo.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
