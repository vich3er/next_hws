import React from 'react';
import {Metadata} from "next";


type Props ={
   params: {id: string};
}


 export const generateMetadata = async ({params}: Props): Promise<Metadata>=>{
    const {id} = await params;
    return {
        title: "page " + id
    }
 }

const PostPage = async ({params}:Props) => {
    const {id} = await params;
    return (
        <div>
           page id is {id}
        </div>
    );
};

export default PostPage;