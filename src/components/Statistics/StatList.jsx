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
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green},${blue})`;
}

StatList.propTypes = {
  statObjects: PropTypes.array.isRequired,
};
