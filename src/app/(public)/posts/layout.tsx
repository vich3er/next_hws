import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: ' Layout Metadata',
}

type Props = {children: React.ReactNode};
const PostsLayout = ({children}:Props) => {
  return (
      <div>
        <hr/>
          PostsLayout
        {children}

        <hr/>
      </div>
  );
};

export default PostsLayout;