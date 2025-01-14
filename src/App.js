import React, { useRef, useState } from 'react';

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error('Error accessing webcam', error);
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  const analyzeImage = async () => {
    captureImage();
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    const response = await fetch('https://your-backend-api-url/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: dataUrl }),
    });
    const result = await response.json();
    setResult(result.message);
  };

  return (
    <div className="App">
      <h1>Skin Cancer Detection</h1>
      <video ref={videoRef} style={{ display: 'block' }} />
      <button onClick={startWebcam}>Start Webcam</button>
      <button onClick={analyzeImage}>Analyze</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App;