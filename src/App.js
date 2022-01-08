import './App.css';
import React from 'react';
import Routes from './Components/Pages/Routes';
import { BrowserRouter } from 'react-router-dom';
import FormState from './Components/Context/FormState';

const App = () => {
  return (
    <FormState>
      <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
      </BrowserRouter>
    </FormState>
  )
}

export default App;












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
