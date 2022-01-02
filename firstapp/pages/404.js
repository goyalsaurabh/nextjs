import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

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
        <Navbar />
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
