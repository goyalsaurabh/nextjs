import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const errorPage = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    };
    useEffect(() => {
        setTimeout(()=>{
            router.push('/');
        },3000);   
    }, []);
    return (
        <>
        <nav>
         <ul className="menu-bar">
            <Link  href="/">
              <a> Home</a> 
            </Link>
            <Link  href="/about">
              <a> About </a> 
            </Link>
            <Link  href="/contact">
              <a> Contact </a> 
            </Link>
            <Link href="/blog">
              <a> Blog </a> 
            </Link>
            <Link href="/product">
              <a> Product </a> 
            </Link>
         </ul>
        </nav>
         <div id="notfound">
             <div className="notfound">
                 <div className="notfound-404">
                     <h1>We are sorry, Page not found!</h1>
                     <a onClick={handleClick}>Back to Homepage</a>
                 </div>
             </div>
         </div>   
        </>
    )
}

export default errorPage
