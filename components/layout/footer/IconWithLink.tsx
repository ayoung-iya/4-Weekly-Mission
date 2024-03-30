import { FooterItem } from '@/types/types';
import styles from './IconWithLink.module.css';
import Link from 'next/link';

const IconWithLink = ({ name, address, imgUrl }: FooterItem) => {
  const target = /^http/.test(address) ? '_blank' : '_self';
  const rel = target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <li>
      <Link href={address} target={target} rel={rel} className={styles.item}>
        {imgUrl ? <img src={imgUrl} alt={name} /> : `${name}`}
      </Link>
    </li>
  );
};

export default IconWithLink;
