import PropTypes from "prop-types";
import TypeFileInfo from "../StatisticsTypeFileInfo/StatisticsTypeFileInfo";
import { SectionStatistics, Title, StatList } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <TypeFileInfo label={label} percentage={percentage} key={id} />
        ))}
      </StatList>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
