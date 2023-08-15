import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';


// Extract smaller child components from this large App component
// Consider:
// - Single Responsibility (what is this part of code meant to do?)
// - Reusability (is the same code repeated?)
// - Complexity (is there too much information being contained within one component? this is subjective!)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <App />
    </>
    );