import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionHistoryTable}>
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
            <td style={{ color: getRandomHexColor() }}>{type}</td>
            <td style={{ color: getRandomHexColor() }}>{amount}</td>
            <td style={{ color: getRandomHexColor() }}>{currency}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default TransactionHistory;