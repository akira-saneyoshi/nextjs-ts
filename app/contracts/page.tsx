'use client';

import { signOut } from 'next-auth/react';

const Contracts = () => {
  return (
    <button onClick={() => signOut()}>Logout</button>
  );
};

export default Contracts;