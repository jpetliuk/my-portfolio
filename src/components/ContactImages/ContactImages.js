import "./ContactImages.css";
import { useState, useEffect } from "react";
import rana from "../../assets/img/rana.png";
import cactus from "../../assets/img/cactus.png";
import koi from "../../assets/img/koi.png";
import elefante from "../../assets/img/elefante.png";
import conejo from "../../assets/img/conejo.png";
import cangrejo from "../../assets/img/cangrejo.png";
import molino from "../../assets/img/molinillo.png";
import tortuga from "../../assets/img/tortuga.png";
import zorro from "../../assets/img/zorro.png";

const ContactImages = () => {
  let allImages = [
    elefante,
    rana,
    cactus,
    koi,
    conejo,
    cangrejo,
    molino,
    tortuga,
    zorro,
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      count === allImages.length - 1 ? setCount(0) : setCount(count + 1);
    }, 9000);
  }, [count]);

  return (
    <div className="contactAnimationMoving">
      <img src={allImages[count]} alt="moving pictures" />
    </div>
  );
};

export default ContactImages;
