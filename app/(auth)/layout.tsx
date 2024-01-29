import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className='min-h-screen min-w-screen flex justify-center items-center'>{children}</div>;
};

export default AuthLayout;
