import { getUser, postSignIn, postSignUp } from '@/api/auth';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  imageSource: string;
  email: string;
}

interface AuthContext {
  user?: User;
  signIn: (data: any) => void;
  signUp: (data: any) => void;
  signOut: () => void;
}

export const authContext = createContext<AuthContext>({
  user: undefined,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();

  const signIn = async (data: any) => {
    const { accessToken, refreshToken } = await postSignIn(data);

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);
  };
  const signUp = async (data: any) => {
    const { accessToken, refreshToken } = await postSignUp(data);

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);
  };

  const signOut = () => {
    // TODO: 로그아웃 기능 구현
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchUser();
  }, []);

  return <authContext.Provider value={{ user, signIn, signUp, signOut }}>{children}</authContext.Provider>;
};

export default AuthProvider;
