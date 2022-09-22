import PropTypes from 'prop-types';
import css from './StatList.module.css';
import { StatItem } from './StatItem';
export const StatList = ({ statObjects }) => {
  return (
    <ul className={css.statList}>
      {statObjects.map(statObject => (
        <li key={statObject.id} className={css.item}>
          <StatItem statObject={statObject} />
        </li>
      ))}
    </ul>
  );
};
StatList.propTypes = {
  statObjects: PropTypes.array.isRequired,
};
