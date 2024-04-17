import Link from 'next/link';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { User } from '@/types/types';
import { getUser } from '@/api/api';
import Image from 'next/image';

function Header() {
  const [user, setUser] = useState<User | null>(null);
  const { pathname } = useRouter();
  const headerPosition = pathname === '/folder' ? styles.static : '';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (err) {
        const error = err as Error;
        console.error(error.message);
      }
    };

    fetchUser();
  }, []);

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
