import Navbar from "../components/Navbar";

const contact  = () => {
    return <>
       <Navbar />
       <style jsx>
          {`
          h1 {
             color: blue;
          }
          `}
       </style>
       {/* <h1 style={{color:"green"}}>Saurabh Goyal</h1> */}
       <h1>Saurabh Goyal</h1>
       <h2>https://sggoyal.blogspot.com/</h2>
       <h3><a href="mailto:sggoyal@gmail.com">sggoyal@gmail.com</a></h3>
    </>;
 };
 
 export default contact;