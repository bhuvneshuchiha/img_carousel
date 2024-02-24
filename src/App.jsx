import { useState } from 'react';
// Import your image assets if needed
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [image, setImage] = useState('');
  const [clicks, setClicks] = useState(0);
  
  const imageArray = ['image1','image2', 'image3', 'image4'];


  function moveForward() {
    setClicks(prev => prev + 1)
    if (clicks >= imageArray.length-1) {
      setClicks(0);
    }
    setImage(imageArray[clicks]);
  }
  

  function moveBackward() {
    setClicks(prev => prev - 1);
    if (clicks <= 0){
      setClicks(imageArray.length-1);
    }
    setImage(imageArray[clicks]);
    
  }

  return (
    <div className='bigDiv' style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <button onClick={moveBackward}>Backward</button>
      </div>
      <div>
        <ImageComp img={image} />
      </div>
      <div>
        <button onClick={moveForward}>Forward</button>
      </div>
    </div>
  );
}

function ImageComp({ img }) {
  return (
    <div style={{
      height: '100px',
      width: '100px',
      border: '1px solid black', // Optional: Add border for better visibility
    }}>
      {img}
    </div>
  );
}

export default App;
