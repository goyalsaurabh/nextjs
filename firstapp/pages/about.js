import Navbar from "../components/Navbar";
import Image from "next/image";

const about  = () => {
    return <>
       <Navbar />
       <h1>This is my about us page!</h1>
       <Image src="/demo1.jpg" height="300" width="500"></Image>
    </>;
 };
 
 export default about;