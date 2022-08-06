import React from "react";
import Footer from "./Footer";
import delanese from '../images/delanese.png'
import liberaria from '../images/libereriaPino.JPG';
import vineyard from '../images/vineyard.jpg';


const Supporting = () => {
  return (
    <div>
      <div className="Supporting">
        <h1>Cito Disco Outreach</h1>
        <div className="Supporting-content-1">
          <a href="https://robertodelanese.com/" className="Supporting-image-wrapper"><img src={delanese} alt="Delanese Method Cover" /></a>
          <div className="Supporting-text-wrapper"><p>The Delanese Method</p></div>
        </div>
        <div className="Supporting-content-2">
          <div className="Supporting-text-wrapper"><p>Libreria Pino</p></div>
          <a href="https://www.libreriapino.com/" className="Supporting-image-wrapper"><img src={liberaria} alt="Libereraria Pino Cover"></img></a>
        </div>
        <div className="Supporting-content-1">
          <a href="https://jycfamilyimporters.com/" className="Supporting-image-wrapper"><img src={vineyard} alt="Delanese Method Cover"></img></a>
          <div className="Supporting-text-wrapper"><p>JYC Family Importers</p></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Supporting;