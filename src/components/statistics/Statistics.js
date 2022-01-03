import PropTypes from "prop-types";
import TypeFileInfo from "./TypeFileInfo";

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((item) => (
          <TypeFileInfo
            label={item.label}
            percentage={item.percentage}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
