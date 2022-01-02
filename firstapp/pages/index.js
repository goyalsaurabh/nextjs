import Navbar from "../components/Navbar";
//import styles from "../styles/index.module.css";

const index  = () => {
 return (
   <>
     <header className="header">
        <div className="brand_box">
         <Navbar/>
      </div>

      <div className="text_box">
         <h1 className="heading_primary">
            <span className="heading_primary_main">
               Welcome to the world of ReactJS
            </span>
            <span className="saurabhtext">Love with JavaScript</span>
         </h1>
         <a href="#" className="btn btn_white btn_animation">
            SaurabhGoyal Technical Blog
         </a>
      </div>
      </header>
   </>
   );
};

export default index;