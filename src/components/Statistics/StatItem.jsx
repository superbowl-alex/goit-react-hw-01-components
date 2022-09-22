import PropTypes from 'prop-types';
import css from './StatItem.module.css';
export const StatItem = ({ statObject: { label, percentage } }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
StatItem.propTypes = {
  statObject: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
