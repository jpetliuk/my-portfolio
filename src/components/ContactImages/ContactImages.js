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
  const [image, setImage] = useState(elefante);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const allImages = [
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
    setTimeout(() => {
      count === allImages.length() - 1 ? setCount(0) : setCount(count + 1);
      setImage(allImages[count]);
    }, 9000);
  }, [count]);

  const [reset, setReset] = useState(false);

  const resetAnimation = () => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 2500);
  };

  return (
    <div className="contactAnimationMoving">
      <img
        onClick={reset === false ? resetAnimation : null}
        className={reset === false ? null : "rotate"}
        src={image}
        alt="moving pictures"
      />
    </div>
  );
};

export default ContactImages;
