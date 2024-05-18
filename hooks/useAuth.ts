import { authContext } from '@/context/authProvider';
import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('반드시 AuthProvider 안에서 사용해야 합니다.');
  }

  return context;
};
