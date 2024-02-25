'use client';
import dynamic from 'next/dynamic';

export const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false
});

//export const MediaQueryMobile = (props: any) => <MediaQuery minWidth={768} />;
