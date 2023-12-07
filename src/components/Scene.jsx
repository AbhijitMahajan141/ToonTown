import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, OrbitControls } from "@react-three/drei";
import { val } from "@theatre/core";
import {
  PerspectiveCamera,
  useCurrentSheet,
  editable as e,
} from "@theatre/r3f";
import TownLoader from "./TownLoader";

const music = new URL("../../public/music.mp3", import.meta.url);

const Scene = () => {
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.addEventListener("click", handleClick);
    };
  }, []);

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    // The length of our Sequence
    const sequenceLength = val(sheet.sequence.pointer.length);

    // Update the position of the playHead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  const handleClick = () => {
    sheet.sequence.attachAudio({ source: music.href }).then(() => {
      sheet.sequence.play();
      console.log("Audio Playing!!!");
    });
  };

  return (
    <>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 5, 5]}
        fov={90}
        near={0.1}
        far={100}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 10]} intensity={5} />
      <OrbitControls enableZoom={false} />
      {/* <e.mesh position={[0, 0, 0]} theatreKey="Box">
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </e.mesh> */}
      <TownLoader />
    </>
  );
};

export default Scene;
