import React from "react";
import BackgroundImage from "../assets/Background.png";
import { scene } from "../config/scene";
import Button from "../assets/Frame 5.png";
export default function OceanScene() {
  return (
    <div
      className="relative h-screen w-screen left- -1px bg-cover bg-bottom bg-no-repeat z-4 overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }} >
        
      {scene.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt={item.name}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            height: item.height,
            width: item.width,
            zIndex: item.zindex,
          }}
          />
        ))}
        <button className="relative top-[75vh] left-[43vw] z-10" >
          <img src = {Button} className="w-[16vw] h-[20vh]" ></img>
        </button>
        
   </div>
)
}
