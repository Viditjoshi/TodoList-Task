import { StrictMode } from 'react'; // Importing React's StrictMode for highlighting potential problems in the app
import { createRoot } from 'react-dom/client'; // Importing `createRoot` to render the app in the DOM
import { store } from "./store"; // Importing the Redux store from the store file
import { Provider } from "react-redux"; // `Provider` makes the Redux store available to the entire app
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the main tailwind css file for global styles
import { Toaster } from 'react-hot-toast';

// Creating the root element for the React app and rendering the component tree
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping the entire app with `Provider` to give access to the Redux store */}
    <Provider store={store}>
      {/* Main App component containing the UI and logic of the application */}
      <App />
      {/* alert message pakege */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={4}
        containerClassName=""
        containerStyle={{}}
      />
    </Provider>
  </StrictMode>,
);
