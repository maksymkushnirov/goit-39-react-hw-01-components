import styles from './Statistics.module.css';

export function Statistics({ title, stats }) {
    return (
       <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={label}>{label}</span>
            <span className={percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    );

    
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}