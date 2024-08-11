import React from "react";
import Hearts from "../assets/heartsbg.jpg";
import styles from "../styles/PageNotFound.module.css";


const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
        <div className={styles.Title}>
            <h2>
                PAGE NOT FOUND
            </h2>
            <hr className={styles.Hr}/>    
        </div>
        <div className={styles.SubTitle}>
            <h4>
                Sorry, the page you're looking for doesn't exist
            </h4>
        </div>
        <div>
            <img src={Hearts} alt="Two hearts" className={styles.Image}></img>
      </div>
    </div>
  );
};

export default PageNotFound;