import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { editable as e } from "@theatre/r3f";

const town = new URL("../../public/town/scene.gltf", import.meta.url);

const TownLoader = (modelPath) => {
  const result = useLoader(GLTFLoader, town.href, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  result.scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <e.group theatreKey="Town">
      <primitive position={[0, 0, 0]} object={result.scene} scale={0.005} />
    </e.group>
  );
};

export default TownLoader;
