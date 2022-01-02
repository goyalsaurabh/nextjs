import Header from "../components/Header";
import Head from "next/head";

const index  = () => {
 return (
   <>
     <Head>
        <title>Home Page</title>
        <meta name="description" content="Next.Js Tutorials" />
         <meta name="keywords" content="HTML, CSS, JavaScript and Next.Js" />
         <meta name="author" content="Saurabh Goyal" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </Head>
     <Header />
   </>
   );
};

export default index;