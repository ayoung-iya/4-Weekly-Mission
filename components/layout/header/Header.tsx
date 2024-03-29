import Link from 'next/link';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '@/types/types';
import { getUser } from '@/api/api';

function Header() {
  const [user, setUser] = useState<User | null>(null);
  const { pathname } = useRouter();
  const headerPosition = pathname === '/folder' ? styles.static : '';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getUser();

        setUser(currentUser);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className={`${styles.headerArea} ${headerPosition}`}>
      <div className={styles.headerGroup}>
        <Link href="/" className={styles.logoArea}>
          <img src="/icons/linkbrary-logo.svg" alt="로고" className={styles.logoImg} />
        </Link>
        <button className={styles.btnGroup}>
          {user ? (
            <>
              <img src={user.imageSource} alt="프로필 사진" className={styles.userProfile} />
              <span className={styles.userEmail}>{user.email}</span>
            </>
          ) : (
            <Link className={styles.btn} href="/signin.html">
              로그인
            </Link>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
