import Link from 'next/link';
import styles from './Header.module.css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { authContext } from '@/context/authProvider';

function Header() {
  const { user } = useContext(authContext);
  const { pathname } = useRouter();
  const headerPosition = pathname === '/folder' ? styles.static : '';

  return (
    <header className={`${styles.headerArea} ${headerPosition}`}>
      <div className={styles.headerGroup}>
        <Link href="/" className={styles.logoArea}>
          <Image fill src="/icons/linkbrary-logo.svg" alt="로고" className={styles.logoImg} />
        </Link>
        <button className={styles.btnGroup}>
          {user ? (
            <>
              <Image src={user.imageSource} alt="프로필 사진" width={28} height={28} className={styles.userProfile} />
              <span className={styles.userEmail}>{user.email}</span>
            </>
          ) : (
            <Link className={styles.btn} href="/signin">
              로그인
            </Link>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
