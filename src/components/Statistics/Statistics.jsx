import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
       <div className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
      </div>
    );
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }
    )
  ),
};