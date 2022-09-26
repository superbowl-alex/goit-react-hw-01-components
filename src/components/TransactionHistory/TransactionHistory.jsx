import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th className={css.tableHeadElem}>Type</th>
          <th className={css.tableHeadElem}>Amount</th>
          <th className={css.tableHeadElem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(transaction => (
          <tr key={transaction.id} className={css.tableRow}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
