import { JSX } from 'react/jsx-runtime';
import { CardMiniProps } from './CardMini.props';
import styles from './CardMini.module.css';
import Title from '../Title/Title';
import Texts from '../Texts/Texts';
import Like from '../Like/Like';
import CardButton from '../CardButton/CardButton';

export default function CardMini(cardData: CardMiniProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${cardData.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topdata}>
            <span className={styles.category}>{cardData.category}</span> · {cardData.postedAt}
          </div>
          <Like count={cardData.likes} />
        </div>
        <div className={styles.article}>
          <Title tag="h2">{cardData.title}</Title>
          <Texts>{cardData.description}</Texts>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.readtime}>{cardData.readTime}</div>
        <CardButton link={cardData.linkUrl}>Читать</CardButton>
      </div>
    </div>
  );
}
