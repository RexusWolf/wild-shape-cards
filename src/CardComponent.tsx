import { WildShape } from './WildShape';
import styles from './CardComponent.module.css';
import { StatIndicator } from './StatIndicator';
import { ChallengeRatingBadge } from './ChallengeRatingBadge';

export const CardComponent = ({ card }: { card: WildShape }) => {
  const formatHitPoints = (hitPoints: string) => {
    const hitPointsArray = hitPoints.split(' ');
    const averageHitPoints = hitPointsArray[0];
    const roll = hitPointsArray[1];
    return { average: averageHitPoints, roll: roll };
  };

  const formattedHitPoints = formatHitPoints(card.hitPoints);
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
        <ChallengeRatingBadge rating={card.challengeRating} />
        <div className={styles.allStats}>
          <div className={styles.abilityScores}>
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
              <div className={styles.hitPoints}>
                <p>{formattedHitPoints.average}</p>
                <p>{formattedHitPoints.roll}</p>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.feats}>
          <section className={styles.featsSection}>
            {card.speed && (
              <p className={styles.feat}>
                <span>Velocidad </span>
                {card.speed}
              </p>
            )}
            {card.senses && (
              <p className={styles.feat}>
                <span>Sentidos </span>
                {card.senses}
              </p>
            )}
            {card.skills && (
              <p className={styles.feat}>
                <span>Habilidades </span>
                {card.skills}
              </p>
            )}

            {card.languages && (
              <p className={styles.feat}>
                <span>Idiomas </span>
                {card.languages}
              </p>
            )}
            {card.resistances && (
              <p className={styles.feat}>
                <span>Resistencias al daño </span>
                {card.skills}
              </p>
            )}
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
