import HeaderComponent from './Components/header-component';
import MainComponent from './Components/main-component';
import BuildCommunity from './Components/build-community';
import FooterComponent from './Components/footer-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="container">
        <MainComponent />
        <BuildCommunity />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
