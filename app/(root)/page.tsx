import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Root = () => {
  return <UserButton afterSignOutUrl='/' />;
};

export default Root;
