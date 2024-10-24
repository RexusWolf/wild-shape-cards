import { WildShape } from './WildShape';
import styles from './Card.module.css';
import { StatIndicator } from './StatIndicator';

export const CardComponent = ({ card }: { card: WildShape }) => {
  return (
    <div className={styles.card}>
      <img className={styles.backgroundImage} src={card.imageUrl} alt="Monster" />
      <div className={styles.cardContent}>
        <div className={styles.titleAndAlignment}>
          <p className={styles.title}>{card.name}</p>
          <p className={styles.sizeAndAlignment}>
            <p>{card.size}</p>/<p>{card.alignment}</p>
          </p>
        </div>
        <div className={styles.challengeRating}>
          <p>{card.challengeRating}</p>
          <p>VD</p>
        </div>
        <div className={styles.stats}>
          {card.stats.map((stat) => (
            <StatIndicator value={stat.value} label={stat.label} />
          ))}
        </div>
        <div className={styles.armorAndHitPoints}>
          <div className={styles.basicValue}>
            <p>CA</p>
            <p>{card.armorClass}</p>
          </div>
          <div className={styles.basicValue}>
            <p>PG</p>
            <p>{card.hitPoints}</p>
          </div>
        </div>
        <section className={styles.feats}>
          <section className={styles.featsSection}>
            <p className={styles.feat}>
              <span>Velocidad </span>
              {card.speed}
            </p>
            <p className={styles.feat}>
              <span>Sentidos </span>
              {card.senses}
            </p>
            <p className={styles.feat}>
              <span>Habilidades </span>
              {card.skills}
            </p>
          </section>

          <section className={styles.featsSection}>
            {card.feats.map((feat) => (
              <p className={styles.feat}>
                <span>{feat.name} </span>
                {feat.description}
              </p>
            ))}
          </section>

          {card.actions.map((action) => (
            <section className={styles.featsSection}>
              <p className={styles.feat}>
                <span>{action.name} </span>
                {action.description}
              </p>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
};
