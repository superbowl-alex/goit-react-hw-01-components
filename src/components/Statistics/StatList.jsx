import PropTypes from 'prop-types';
import css from './StatList.module.css';
import { StatItem } from './StatItem';
export const StatList = ({ statObjects }) => {
  return (
    <ul className={css.statList}>
      {statObjects.map(statObject => (
        <StatItem key={statObject.id} statObject={statObject} />
      ))}
    </ul>
  );
};
StatList.propTypes = {
  recipes: PropTypes.array.isRequired,
};
