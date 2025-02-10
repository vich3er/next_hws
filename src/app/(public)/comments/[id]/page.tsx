import React from 'react';
import {Metadata} from "next";

type Props = {
    params: {id: string};
}


export const generateMetadata = async ({params}: Props): Promise<Metadata> =>
{
    const {id} = await params;
    return {
        title: "comment id " + id
    }
}

const CommentPage = async ({params}: Props ) => {
   const {id} =  await params;

    return (
        <div>
            comment id = {id}
        </div>
    );
};

export default CommentPage;