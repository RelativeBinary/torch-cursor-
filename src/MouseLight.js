import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

function MouseLight() {
  const {viewport} = useThree();
  const lightRef = useRef();

  useFrame(({ mouse }) => {
    // console.log("Hey, I'm executing every frame!");
    // console.log(lightRef.current)
    // console.log(mouse)
    // lightRef.current.rotation.x += 0.05;
    const x = (mouse.x * viewport.width)/3.8 ;
    const y = (mouse.y * viewport.height)/4.3 ;
    console.log(`x: ${x}, mouse-x: ${mouse.x}`);
    console.log( `y: ${y}, mouse-y: ${mouse.y}`);
    console.log(lightRef.current)
    // const x = (mouse.x / window.innerWidth) * 2 - 1;
    // const y = -(mouse.y * window.innerHeight) * 2 + 1;
    lightRef.current.position.set(x, y, 5);
    lightRef.current.rotation.set(-y, x, 5);
  });

  return (
    <mesh ref={lightRef} position={[1, 2, 5]}>
      <pointLight
        color={'white'}
        position={[0, 0, 20]}
        intensity={1.5}
        angle={0.15}
      />
      {/* <boxGeometry args={[3, 2, 2]} /> */}
      <meshStandardMaterial />
    </mesh>
  );
}

export default MouseLight