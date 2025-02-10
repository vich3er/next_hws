import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Сomments Layout Metadata',
}

type Props = {children: React.ReactNode};
const CommentsLayout = ({children}:Props) => {
  return (
      <div>
        <hr/>
          CommentsLayout
        {children}

        <hr/>
      </div>
  );
};

export default CommentsLayout;