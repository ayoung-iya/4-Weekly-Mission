import { BASE_URL } from '@/util/apiConstants';

export const postSignIn = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`${BASE_URL}/auth/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response?.ok) {
    throw new Error('로그인을 실패했습니다.');
  }

  const token = await response.json();

  return token;
};
