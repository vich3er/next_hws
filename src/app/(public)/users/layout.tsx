import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Users Layout Metadata',
}

type Props = {children: React.ReactNode};
const UsersLayout = ({children}:Props) => {
  return (
      <div>
        <hr/>
users layout
        {children}

        <hr/>
      </div>
  );
};

export default UsersLayout;