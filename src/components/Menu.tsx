import Link from "next/link";

export const Menu = () => {
    return (
       <>
           <ul>
               <li><Link href="/users">users</Link></li>
               <li><Link href="/posts">posts</Link></li>
               <li><Link href="/comments">comments</Link></li>
           </ul>
           <hr/>
       </>
    );
};