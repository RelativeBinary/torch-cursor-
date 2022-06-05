import './App.css';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Box from './Box';
import MouseLight from './MouseLight';
import MyText from './MyText';



function App() {
  const [MousePosition, setMousePosition] = useState({
    left: -100,
    top: -100,
  });

  const handleMouseMove = (ev) => {
    setMousePosition({ left: ev.pageX, top: ev.pageY });
  };
  // mouse follow source: https://codesandbox.io/s/r3f-mouse-8d3ho?file=/src/index.js:317-403
  // don't forget to read react three fiber docs 

  // TODO this sort of effect is mad laggy, might need to figure out performance issues if i really want to use this in a legit project
  return (
    <div className='canvas-container' onMouseMove={(ev) => handleMouseMove(ev)}>
      <div
        className='cursor'
        style={{
          position: 'absolute',
          left: `${MousePosition.left}px`,
          top: `${MousePosition.top}px`,
        }}
      ></div>
      <Canvas>
        <MouseLight />
        <Box />
        <MyText />
      </Canvas>
    </div>
  );
}

export default App;
