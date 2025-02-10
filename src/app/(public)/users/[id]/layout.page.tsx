import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'User Layout Metadata',
}

type Props = {children: React.ReactNode};
const UserLayout = ({children}:Props) => {
  return (
      <div>
        <hr/>

        {children}

        <hr/>
      </div>
  );
};

export default UserLayout;