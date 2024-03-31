import styles from '@/styles/landing.module.css';
import Layout from '@/components/layout/Layout';
import { MAIN_SERVICES } from '@/constants/mainServices';
import ServiceSection from '@/components/pages/landing/ServiceSection';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradient}>세상의 모든 정보</span>를 <br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <Link href="/signup" className={styles.button}>
          링크 추가하기
        </Link>
        <div className={styles.screen}>
          <Image fill src="/images/screen.png" alt="홈페이지 예시 화면" />
        </div>
      </main>

      <article className={styles.articleArea}>
        {MAIN_SERVICES.map(service => (
          <ServiceSection key={service.id} {...service} />
        ))}
      </article>
    </>
  );
}
