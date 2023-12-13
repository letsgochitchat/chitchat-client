'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace('/start');
  }, [router]);

  return null;
};

export default MainPage;
