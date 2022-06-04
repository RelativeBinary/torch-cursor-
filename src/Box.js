import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
  const boxRef = useRef();

  useFrame(() => {
    // console.log("Hey, I'm executing every frame!");
    // console.log(boxRef.current.rotation)
    boxRef.current.rotation.x += 0.001;
    // boxRef.current.rotation.y += 0.01;

  });

  return (
    <mesh ref={boxRef} position-x={0} position-y={0}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color='white' />
    </mesh>
  );
}

export default Box;
