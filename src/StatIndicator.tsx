import styles from './StatIndicator.module.css';
export function StatIndicator({ value, label }: { value: number; label: string }) {
  const getModifier = (value: number) => {
    return Math.floor((value - 10) / 2);
  };

  const getModifierStatus = (value: number) => {
    if (value < 10) {
      return 'negative';
    } else if (value === 10) {
      return 'neutral';
    } else {
      return 'positive';
    }
  };
  return (
    <div className={styles.statIndicator}>
      <p>{label}</p>
      <div>
        <div className={styles.statValueContainer}>
          <p>{value}</p>
        </div>
        <div data-status={getModifierStatus(value)} className={styles.modifier}>
          <p>{getModifier(value)}</p>
        </div>
      </div>
    </div>
  );
}
