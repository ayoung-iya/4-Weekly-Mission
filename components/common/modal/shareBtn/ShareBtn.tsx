import Image from 'next/image';
import styles from './ShareBtn.module.css';

interface ShareBtnProps {
  name: string;
  imgUrl: string;
  backgroundColor?: string;
}

const ShareBtn = ({ name, imgUrl, backgroundColor = '' }: ShareBtnProps) => (
  <div className={styles.btnShare}>
    <div className={`${styles.icon} ${backgroundColor ? styles[backgroundColor] : ''}`}>
      <Image width={18} height={18} src={imgUrl} alt={`${name} 로고`} />
    </div>
    <span className={styles.name}>{name}</span>
  </div>
);

export default ShareBtn;
