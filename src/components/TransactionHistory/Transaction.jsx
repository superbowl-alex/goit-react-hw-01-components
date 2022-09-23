import PropTypes from 'prop-types';
import css from './Transaction.module.css';
export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.tableRowElem}>{type}</td>
      <td className={css.tableRowElem}>{amount}</td>
      <td className={css.tableRowElem}>{currency}</td>
    </>
  );
};
Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
