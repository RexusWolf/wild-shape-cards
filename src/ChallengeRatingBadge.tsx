import styles from './ChallengeRatingBadge.module.css';

export function ChallengeRatingBadge({ rating }: { rating: string }) {
  const getRatingBannerStyle = (rating: string) => {
    if (rating === '0') {
      return styles.banner0;
    }
    if (rating === '1/4') {
      return styles.banner1_4;
    }
    if (rating === '1/2') {
      return styles.banner1_2;
    }
    if (rating === '1') {
      return styles.banner1;
    }
    if (rating === '2') {
      return styles.banner2;
    }
    if (rating === '3') {
      return styles.banner3;
    }
    if (rating === '4') {
      return styles.banner4;
    }
    if (rating === '5') {
      return styles.banner5;
    }
    return '';
  };

  return (
    <div className={`${styles.challengeRating} ${getRatingBannerStyle(rating)}`}>
      <p>{rating}</p>
      <p>VD</p>
    </div>
  );
}
