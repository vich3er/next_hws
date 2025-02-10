import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: ' Layout Metadata',
}

type Props = {children: React.ReactNode};
const PostLayout = ({children}:Props) => {
  return (
      <div>
        <hr/>
post page
        {children}

        <hr/>
      </div>
  );
};

export default PostLayout;