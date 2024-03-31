import Header from './header/Header';
import Footer from './footer/Footer';
import UserProvider from '@/context/UserContext';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
