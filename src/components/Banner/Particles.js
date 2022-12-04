import "./Particles.css";
import { useEffect, useState } from "react";

const Particles = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        className="bannerMovment"
        style={{
          bottom: mousePos.y * 0.4 + 140,
          right: mousePos.x * 0.05 + 240,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment particle2"
        style={{
          bottom: mousePos.y * 0.2 + 120,
          right: mousePos.x * 0.04 + 200,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment"
        style={{
          top: mousePos.y * 0.22 + 110,
          left: mousePos.x * 0.12 + 230,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment particle2"
        style={{
          top: mousePos.y * 0.25 + 150,
          left: mousePos.x * 0.1 + 300,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment"
        style={{
          bottom: mousePos.y * 0.1 + 10,
          left: mousePos.x * 0.05 + 100,
        }}
      >
        <div></div>
      </div>
    </>
  );
};

export default Particles;
