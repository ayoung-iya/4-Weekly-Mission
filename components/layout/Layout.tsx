import Header from './header/Header';
import Footer from './footer/Footer';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

function Layout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  if (pathname === '/signin' || pathname === '/signup') {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
