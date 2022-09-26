import PropTypes from 'prop-types';
import css from './StatItem.module.css';

export const StatItem = ({ statObject: { label, percentage } }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </>
  );
};

StatItem.propTypes = {
  statObject: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
