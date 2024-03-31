import { FooterItem } from '@/types/types';
import styles from './IconWithLink.module.css';
import Link from 'next/link';
import Image from 'next/image';

const IconWithLink = ({ name, address, imgUrl }: FooterItem) => {
  const target = /^http/.test(address) ? '_blank' : '_self';
  const rel = target === '_blank' ? 'noopener noreferrer' : '';
  const className = /^http/.test(address) ? `${styles.item} ${styles.icon}` : styles.item;

  return (
    <li className={className}>
      <Link href={address} target={target} rel={rel} className={styles.center}>
        {imgUrl ? <Image src={imgUrl} alt={name} width={20} height={18}/> : `${name}`}
      </Link>
    </li>
  );
};

export default IconWithLink;
