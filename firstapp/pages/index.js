import Link from "next/link";

const index  = () => {
   return <>
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
      <h1>Hello World!</h1>
   </>;
};

export default index;