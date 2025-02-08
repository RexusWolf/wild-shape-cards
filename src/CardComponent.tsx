import { WildShape } from './WildShape';
import styles from './CardComponent.module.css';
import { StatIndicator } from './StatIndicator';
import { ChallengeRatingBadge } from './ChallengeRatingBadge';
import { useState } from 'react';

export const CardComponent = ({ card }: { card: WildShape }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const formatHitPoints = (hitPoints: string) => {
    const hitPointsArray = hitPoints.split(' ');
    const averageHitPoints = hitPointsArray[0];
    const roll = hitPointsArray[1];
    return { average: averageHitPoints, roll: roll };
  };

  const formattedHitPoints = formatHitPoints(card.hitPoints);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* Frente de la tarjeta */}
        <div className={styles.cardFront}>
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
                  <StatIndicator key={stat.label} value={stat.value} label={stat.label} />
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

            <div className={styles.basicInfo}>
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
                  {card.resistances}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            <p className={styles.title}>{card.name} - Habilidades</p>

            <section className={styles.feats}>
              <section className={styles.featsSection}>
                {card.feats.map((feat) => (
                  <p key={feat.name} className={styles.feat}>
                    <span>{feat.name} </span>
                    {feat.description}
                  </p>
                ))}
              </section>

              {card.actions.map((action) => (
                <section key={action.name} className={styles.featsSection}>
                  <p className={styles.feat}>
                    <span>{action.name} </span>
                    {action.description}
                  </p>
                </section>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
