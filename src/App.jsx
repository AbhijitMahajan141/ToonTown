import "./App.css";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { SheetProvider, editable as e } from "@theatre/r3f";
import WebsiteContent from "./components/WebsiteContent";
import townJson from "./townJson.json"; //For Production
import Scene from "./components/Scene";

function App() {
  // const sheet = getProject("Town Project").sheet("TownScene");
  //For Production
  const project = getProject("Town Project", { state: townJson }).sheet(
    "TownScene"
  );

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      {/* Scene must be wrapped in a SheetProvider and then Scroll Controls */}
      <ScrollControls
        pages={10}
        // distance={} // Controls the distance of the page that is scrolled
        damping={0.2} // dampens the scroll
        maxSpeed={5} // the speed to get to the next animation
      >
        <SheetProvider sheet={project}>
          <Scene />
        </SheetProvider>

        <Scroll html>
          <WebsiteContent />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
