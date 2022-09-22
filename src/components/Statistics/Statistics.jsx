import PropTypes from 'prop-types';
import { StatList } from './StatList';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <StatList statObjects={stats} />
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
