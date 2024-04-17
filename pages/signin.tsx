import InputGroup from '@/components/pages/sign/InputGroup';
import { INPUT_INFO } from '@/constants/sign';
import styles from '@/styles/sign.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

export default function SignIn() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerArea}>
        <Link href="/" className={styles.goToMain}>
          <Image src="/icons/linkbrary-logo.svg" alt="로고" width={210.583} height={38} />
        </Link>
        <p className={styles.question}>
          회원이 아니신가요?
          <Link href="signup" className={styles.link}>
            회원 가입하기
          </Link>
        </p>
      </header>

      <FormProvider {...methods}>
        <form action="" className={styles.formArea} onSubmit={methods.handleSubmit(onSubmit)}>
          <InputGroup info={INPUT_INFO.email} />
          <InputGroup info={INPUT_INFO.password.signIn} />
          <button type="submit" className={styles.button}>
            로그인
          </button>
        </form>
      </FormProvider>

      <div className={styles.snsButtonGroup}>
        <span className={styles.title}>소셜 로그인</span>
        <ul className={styles.buttonList}>
          <li className={`${styles.buttonItem} ${styles.google}`}>
            <Link href="https://www.google.com/">
              <Image width={22} height={22} src="/icons/google-logo-color.png" alt="구글로 로그인" />
            </Link>
          </li>
          <li className={`${styles.buttonItem} ${styles.kakao}`}>
            <Link href="https://www.kakaocorp.com/page/">
              <Image width={26} height={24} src="/icons/kakao-logo-color.svg" alt="카카오로 로그인" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
