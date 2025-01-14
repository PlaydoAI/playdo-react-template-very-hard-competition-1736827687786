# skin cancer detection using webcam

## Project Overview
1. PROJECT OVERVIEW
- Brief description of what the app does:  
  This React application uses a user's webcam to capture images of their skin, processes those images, and provides a preliminary indication of whether the captured skin area might show signs of skin cancer based on a trained machine learning model. The application is for educational purposes and promotes skin health awareness.

- Key features and functionality:  
  - Web-based integration with the user's webcam to capture skin images in real-time.  
  - Upload the captured image to a backend API for skin cancer classification.  
  - Display the classification result and provide action recommendations.  
  - Responsive, modern user interface for desktop and mobile compatibility.

- Main technologies used:  
  React (frontend), TensorFlow.js (optional for basic local inference if needed), and integration with an external machine learning API for processing (Node.js or Python backend).  

2. DEVELOPMENT INSTRUCTIONS
- How to run and test the application:  
  1. Clone the repository.  
  2. Install dependencies with `npm install`.  
  3. Start the development server using `npm start`.  
  4. Ensure the backend API for the ML model is running and accessible from the frontend.  
  5. Test the app by loading it in a browser and allowing webcam access when prompted.  

- Key files and their purposes:  
  - src/App.js: Main application logic and components. Handles the webcam feed and communication with the backend.  
  - public/index.html: Main HTML template for ensuring a responsive app container.  
  - src/index.js: Application entry point to render components.  
  - src/App.css: Styles for the user interface.  

- Any important configuration needed:  
  - Update the backend API URL in `src/App.js` to point to your deployed ML model API.  
  - Ensure the backend API has appropriate CORS policies to allow requests from the React app.