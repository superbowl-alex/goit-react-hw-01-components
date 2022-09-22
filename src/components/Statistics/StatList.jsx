import PropTypes from 'prop-types';
import css from './StatList.module.css';
import { StatItem } from './StatItem';
export const StatList = ({ statObjects }) => {
  const countItems = statObjects.length;
  return (
    <ul className={css.statList}>
      {statObjects.map(statObject => (
        <li
          key={statObject.id}
          className={css.item}
          style={{
            backgroundColor: getRandomHexColor(),
            flexBasis: `calc(100%/${countItems})`,
          }}
        >
          <StatItem statObject={statObject} />
        </li>
      ))}
    </ul>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatList.propTypes = {
  statObjects: PropTypes.array.isRequired,
};
