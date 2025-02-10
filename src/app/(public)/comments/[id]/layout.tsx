import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Comment Layout Metadata',
}

type Props = {children: React.ReactNode};
const CommentLayout = ({children}:Props) => {
  return (
      <div>
        <hr/>
comment with id layout
        {children}

        <hr/>
      </div>
  );
};

export default CommentLayout;