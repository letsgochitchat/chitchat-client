'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGoogleAuthMutation } from '@/hooks/api/auth/useGoogleAuthMutation';
import { useToast } from '@/hooks/common/useToast';

const GoogleAuthPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();

  const { mutate: googleAuthMuate } = useGoogleAuthMutation({
    onSuccess: () => {
      router.replace('/chat');

      toast.success('로그인 성공');
    },
    onError: () => {
      toast.error('로그인 실패');
    },
  });

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      console.log(code);
      googleAuthMuate(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default GoogleAuthPage;
