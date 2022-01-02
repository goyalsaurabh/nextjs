import Navbar from "../components/Navbar";
import Image from "next/image";

const about  = () => {
    return <>
       <Navbar />
       <h1>This is my about us page!</h1>
       <Image src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              height="300" width="500" alt="aboutImage"></Image>
    </>;
 };
 
 export default about;