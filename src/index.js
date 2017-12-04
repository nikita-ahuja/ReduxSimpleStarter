import React from 'react';
import ReactDOM from 'react-dom';

//Some keys (like this one) are totally okay to reveal on the front end.
const API_KEY = 'AIzaSyB-TqzcV58QS13wLzbAr1-S64S2kKVnPJ0'

// Create a new component. This component should produce some HTML.

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// We need to make an instance of app
// <App></App>
// <App />
