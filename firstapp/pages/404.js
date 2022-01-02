import Link from "next/link";
const errorPage = () => {
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
                     <a href="/">Back to Homepage</a>
                 </div>
             </div>
         </div>   
        </>
    )
}

export default errorPage
