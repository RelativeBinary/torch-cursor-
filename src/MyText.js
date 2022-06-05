import React, { useState } from 'react'
import {Text} from 'troika-three-text'
import { extend } from '@react-three/fiber';
import TimesNewRoman from './times-new-roman.ttf';

extend({ Text });
const text = "The Sample Cube";
function MyText() {
  const [opts, setOpts] = useState({
    font: TimesNewRoman,
    fontSize: 12,
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    materialType: 'MeshPhongMaterial',
  });
  // https://codesandbox.io/embed/troika-3d-text-via-react-three-fiber-ntfx2?fontsize=14
  // https://troika-examples.netlify.app/#text
  return (
    <mesh position-x={-1} position-y={2}>
      <text
        position-z={0}
        color={'white'}
        scale={0.03}
        {...opts}
        text={text}
        anchorX='center'
        anchorY='middle'
      >
        <meshStandardMaterial color='white' />
      </text>
    </mesh>
  );
}

export default MyText