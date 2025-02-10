import React from 'react';
import {Metadata} from "next";

type Props ={
    params: {
        id: string;
    }
}

export const generateMetadata =async ({params}: Props): Promise<Metadata> =>{
    const {id} = await params;
    return {
        title: "page " + id
    }

}

const UserPage =async ({params}: Props) => {
    const {id}= await params
    return (
        <div>
            users page id {id}
        </div>
    );
};

export default UserPage;