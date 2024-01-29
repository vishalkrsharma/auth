import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  return <div className='min-h-screen min-w-screen flex justify-center items-center'>{children}</div>;
};

export default RootLayout;
